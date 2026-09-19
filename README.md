# TruGlo (GLOW) — TrueFoundry Agent Harness Hackathon

**Pitch:** TruGlo is relationship intelligence and self-improvement that can include dating — swipe and talk to people you’re getting to know, with guardrails. The agent flags possible abuse and precursor patterns (pressure, isolation, money, inconsistency); a professional can join to review; if you’re flagged, it can help you improve, and reviewing another person’s patterns works both ways. Nothing is written onto another human until a person approves. Friend-join is optional.

## Observe / Control / Test
- **Observe:** MCP tool traces for `propose_red_flag`
- **Control:** approval pause before a flag is posted (`require_approval_for_tools` + `resolve_red_flag`)
- **Test:** repeatable demo script in `AGENT.md`

## Setup
1. `cd trueglow-mcp && npm install`
2. Add xAI model in TrueForge with `XAI_API_KEY`
3. Add MCP connector pointing at `node …/trueglow-mcp/src/index.js`
4. Create agent from `AGENT.md`
5. Optional local Grok chat bridge: `../scripts/chat-grok.sh "your question"`

## Privacy note
Separate from GLOW solo-growth on-device promise. This hackathon demo only handles explicit chat text in-session — no OS calendar/health raw upload.

## Not this product
Break Up / Mend (ReBloom) stays with Break Up App bot.
