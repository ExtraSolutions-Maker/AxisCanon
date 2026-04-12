# AxisCanon Pilot Offer Sheet

## Goal
Prove deterministic normalization value in one production-relevant workflow before broader rollout.

## Pilot scope (fixed)
- **One workflow/queue only** (example: alert normalization before SIEM routing)
- **20–50 representative sample payloads** supplied by customer
- **Single primary success metric** agreed before start
- **Weekly review cadence** with named owner

## Best-fit starting points
1. **Cyber IOC intake** where inconsistent text breaks downstream parsing/routing
2. **Compliance evidence intake normalization** where routing/classification requires stable structure

> Note: compliance fit is currently normalization/routing of evidence intake, not full control extraction mapping.

## Deliverables during pilot
- Contracted normalization output for in-scope workflow
- Scored results against customer samples
- Variance notes (edge cases + handling recommendations)
- Usage and billing traceability via prepaid lock/settle flow

## Commercial model
- Prepaid credits only
- Bounded usage and explicit execution economics
- No negative-balance execution

## Suggested timeline
- **Week 0:** scope lock + sample handoff
- **Week 1:** first scored outputs + variance review
- **Week 2:** contract tuning + repeat run
- **Week 3/4:** go/no-go decision for expansion

## Required customer inputs
- Sample payloads with expected handling outcome
- Workflow owner for weekly review
- Priority metric baseline (current state)

## Exit criteria (go/no-go)
- Metric moved in the agreed direction
- Output contract stable enough for downstream automation
- Operational owner approves expansion path

## CTA
Email founders@extrasoftware.io with subject: **"AxisCanon Pilot Scope"** and include:
- workflow in scope
- payload examples count
- preferred kickoff week
