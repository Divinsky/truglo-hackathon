#!/usr/bin/env node
/**
 * TrueGlow MCP — propose_red_flag with pending approval store.
 * Wire into TrueForge as an MCP connector; set require_approval_for_tools to include propose_red_flag.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

const DATA_DIR = process.env.TRUEGLOW_DATA_DIR || path.join(process.cwd(), ".trueglow-data");
const PENDING = path.join(DATA_DIR, "pending.json");
const POSTED = path.join(DATA_DIR, "posted.json");

function ensure() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(PENDING)) fs.writeFileSync(PENDING, "[]");
  if (!fs.existsSync(POSTED)) fs.writeFileSync(POSTED, "[]");
}
function read(file) {
  ensure();
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
function write(file, data) {
  ensure();
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const CATEGORIES = ["pressure", "isolation", "money", "inconsistency"];

const server = new McpServer({
  name: "trueglow",
  version: "0.1.0",
});

server.registerTool(
  "propose_red_flag",
  {
    title: "Propose red flag",
    description:
      "Propose a red-flag note for a shared TrueGlow session. Does NOT post to another person. Creates a pending proposal that requires human/professional approval before anything is written onto another human. Categories: pressure, isolation, money, inconsistency. Never diagnose narcissism or call someone a liar.",
    inputSchema: {
      quote: z.string().describe("Short quote or paraphrase of the concerning pattern (user's words or observed phrasing)"),
      category: z.enum(["pressure", "isolation", "money", "inconsistency"]),
      confidence: z.number().min(0).max(1).describe("0–1 confidence"),
      session_id: z.string().optional().describe("Shared session id, e.g. maya-friend-demo"),
      note_for_approver: z.string().optional().describe("Optional context for the human approver only"),
    },
  },
  async ({ quote, category, confidence, session_id, note_for_approver }) => {
    const id = randomUUID();
    const proposal = {
      id,
      status: "pending_approval",
      quote,
      category,
      confidence,
      session_id: session_id || "default",
      note_for_approver: note_for_approver || null,
      created_at: new Date().toISOString(),
      posted: false,
    };
    const pending = read(PENDING);
    pending.push(proposal);
    write(PENDING, pending);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              ok: true,
              proposal_id: id,
              status: "pending_approval",
              message:
                "Red flag proposed but NOT posted. A human must approve before this is written into the shared session about another person.",
              proposal,
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

server.registerTool(
  "list_pending_red_flags",
  {
    title: "List pending red flags",
    description: "List red-flag proposals waiting for human approval.",
    inputSchema: {
      session_id: z.string().optional(),
    },
  },
  async ({ session_id }) => {
    let pending = read(PENDING).filter((p) => p.status === "pending_approval");
    if (session_id) pending = pending.filter((p) => p.session_id === session_id);
    return {
      content: [{ type: "text", text: JSON.stringify({ pending }, null, 2) }],
    };
  }
);

server.registerTool(
  "resolve_red_flag",
  {
    title: "Resolve red flag (approve or reject)",
    description:
      "Human/professional decision on a pending red flag. decision=approve posts it into the session log; reject discards it. Prefer routing this through TrueForge require_approval, or call explicitly from an approval UI.",
    inputSchema: {
      proposal_id: z.string(),
      decision: z.enum(["approve", "reject"]),
      resolved_by: z.string().describe("Who approved/rejected, e.g. Irina or Maya"),
    },
  },
  async ({ proposal_id, decision, resolved_by }) => {
    const pending = read(PENDING);
    const idx = pending.findIndex((p) => p.id === proposal_id);
    if (idx < 0) {
      return {
        content: [{ type: "text", text: JSON.stringify({ ok: false, error: "proposal_not_found" }) }],
        isError: true,
      };
    }
    const item = pending[idx];
    item.status = decision === "approve" ? "approved" : "rejected";
    item.resolved_by = resolved_by;
    item.resolved_at = new Date().toISOString();
    item.posted = decision === "approve";
    pending.splice(idx, 1);
    write(PENDING, pending);
    if (decision === "approve") {
      const posted = read(POSTED);
      posted.push(item);
      write(POSTED, posted);
    }
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              ok: true,
              decision,
              posted: item.posted,
              item,
              message:
                decision === "approve"
                  ? "Approved — red flag written into shared session log."
                  : "Rejected — nothing posted about the other person.",
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
