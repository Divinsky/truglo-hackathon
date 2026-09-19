# HackerSquad paste (TruGlo) — no invented metrics

## Title
TruGlo — approval-gated relationship intelligence agent

## One-liner / tagline
TruGlo is relationship intelligence — not dating. A friend joins a live agent session; the agent proposes red-flag notes, and a person must approve before anything is written onto another human.

## Short description (paste)
TruGlo helps people see relationship patterns without becoming a dating app or an AI companion. For this Agent Harness hackathon we show Observe / Control / Test on a TruGlo agent: it calls `propose_red_flag` when it notices pressure, isolation, money asks, or inconsistency; TrueForge (or the local demo) pauses for human approval; accept/reject decides whether anything is written into the shared session. We do not diagnose narcissism or call anyone a liar. Built on the Glow Up Mode product thesis (behavioral mirror → readiness → lifecycle modes). Domain TruGlo.app reserved. Disclose: concept/prototypes existed before today; today’s build is the harness-visible approval-gated tool path + demo.

## Demo script for screen record NOW (no xAI key required)
1. Open `/workspace/glow-hackathon/demo/index.html` in a browser (or open the file from Finder).
2. Say aloud: “Maya (friend) joins a shared TruGlo session.”
3. Point at the chat snippet with the money/pressure line.
4. Point at the tool trace: `propose_red_flag` → status `pending_approval` (Observe).
5. Click **Approve** — show posted to session log (Control). Optionally refresh and show **Reject** writes nothing (Test).
6. Optional 20 sec: flash `trueglow-mcp` source or AGENT.md to show real MCP tool exists for TrueForge attach.

## TrueForge attach (only if XAI key is available) — ~60 sec
1. trueforge.dev → add model provider xAI → paste `XAI_API_KEY` → pick grok-4 / grok-4.6
2. Connectors → add MCP stdio: `node /workspace/glow-hackathon/trueglow-mcp/src/index.js` (run `npm install` in that folder once)
3. Create agent from AGENT.md instructions; enable tools propose_red_flag, list_pending_red_flags, resolve_red_flag; set require_approval_for_tools: propose_red_flag
4. Chat: paste Maya money line → wait for approval pause → approve

## Do not claim
Shipped consumer app, user counts, accuracy %, HandoffHelper = TruGlo, Break Up/Mend merge.
