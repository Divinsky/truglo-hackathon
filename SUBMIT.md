# TruGlo — hackathon submit packet (product truth)

**Name:** TruGlo (domain TruGlo.app owned; cutover later)  
**Was:** GLOW / Lumen (working names). Not Break Up/Mend. Not HandoffHelper (separate; optional harness fallback only).

## One-liner
TruGlo is relationship intelligence and self-improvement that can include dating — swipe and talk to people you’re getting to know, with guardrails. The agent flags possible abuse and precursor patterns (pressure, isolation, money, inconsistency); a professional can join to review; if you’re flagged, it can help you improve, and reviewing another person’s patterns works both ways. Nothing is written onto another human until a person approves. Friend-join is optional.


## Longer pitch (1–2 sentences)
Dating apps match on what people say. TruGlo helps people see their patterns first. For the TrueFoundry harness demo we show Observe / Control / Test: the agent calls `propose_red_flag`, pauses for human approval, then accepts or rejects — no narcissism labels, no calling anyone a liar.

## Origin (Glow Up Mode)
From Claude Glow Up Mode (May 2026): reject AI-companion gimmick → behavioral mirror → readiness gate → lifecycle modes (solo → dating → partnered → couples → recovery) → concept brief + Lumen/GLOW prototypes. Privacy gate later locked: raw OS signals stay on device for the solo product; this hackathon demo only uses in-session chat text.

## Demo script (3 min)
1. Open TrueForge agent **TruGlo** with MCP `trueglow-mcp`.
2. Join as professional reviewer “Maya” — paste chat with a money/pressure line.
3. Agent calls `propose_red_flag({ quote, category, confidence })` — categories: pressure | isolation | money | inconsistency.
4. **Approval pause** (Control) — human approve/reject.
5. Show tool trace (Observe). Repeat once (Test).

## Assets on Glow Bot machine
- MCP: `/workspace/glow-hackathon/trueglow-mcp` — tools: propose_red_flag, list_pending_red_flags, resolve_red_flag
- Agent instructions: `/workspace/glow-hackathon/AGENT.md` (update name TrueGlow → TruGlo in UI)
- Inventory: `/workspace/glow-inventory/` (Claude Glow Up Mode + Design + privacy Notion pages)
- Notion hub: https://app.notion.com/p/3d947e7d7ca58125912bcd6e090bbd0c

## Do not invent
No user counts, accuracy %, revenue, or “proven” regulatory claims. Status at pause: concept + prototypes exist; no production TruGlo app shipped; no roadmap was on file in Claude as of Aug 28.

## Still blocked if missing
xAI API key for Grok model in TrueForge; live video for hackersquad submit.
