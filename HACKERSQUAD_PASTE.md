# HackerSquad paste (TruGlo) — no invented metrics

## Title
TruGlo — approval-gated relationship intelligence agent

## One-liner / tagline
TruGlo is relationship intelligence and self-improvement that can include dating — swipe and talk to people you’re getting to know, with guardrails. The agent flags possible abuse and precursor patterns (pressure, isolation, money, inconsistency); a professional can join to review; if you’re flagged, it can help you improve, and reviewing another person’s patterns works both ways. Nothing is written onto another human until a person approves. Friend-join is optional.


## Short description (paste)
TruGlo helps people date and build better relationships with guardrails — swipe and talk to people you’re getting to know, while an agent flags concrete risk patterns (pressure, isolation, money, inconsistency), including possible abuse / precursor-to-abuse signals. A professional can join to review flags; human approval is required before anything is written onto another human. Getting flagged can feed self-improvement; reviewing another person’s patterns goes both ways. We do not diagnose, label narcissism, or call anyone a liar. For this Agent Harness hackathon we show Observe / Control / Test via `propose_red_flag` + approval pause (TrueForge or the local demo). Domain TruGlo.app reserved. Disclose: concept/prototypes existed before today; today’s build is the harness-visible approval-gated tool path + demo.


## Demo script for screen record NOW (no xAI key required)
1. Open `/workspace/glow-hackathon/demo/index.html` in a browser (or open the file from Finder).
2. Say aloud: “Maya (professional reviewer) joins to review proposed flags.”
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
