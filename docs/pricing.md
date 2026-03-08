# Pricing

Predictable prepaid pricing for deterministic API workloads.

AxisCanon uses a prepaid credit model with atomic lock-before-execution billing.

## How billing works
1. Estimate cost from payload (`/estimate_cost`)
2. Reserve funds (`/lock_funds`)
3. Execute normalization (`/normalize`)
4. Settle actual cost and release remainder

No post-billing. No negative balances.

## Usage tiers (compute-aligned)

| Tier | Payload profile | Credits / request | Typical use |
|---|---|---:|---|
| Small | Short IOC/event snippets | 1x baseline | high-frequency lightweight normalization |
| Medium | Structured multi-field payloads | 2x baseline | standard production pipelines |
| Large | Heavier payloads near cap | 4x baseline | deep enrichment / complex normalization |

> Exact payload cutoffs and live limits are available via `/capabilities`.

## Credit top-up packs

| Pack | Intended use |
|---|---|
| Starter | evaluation, sandbox, initial integration |
| Growth | day-to-day production automation |
| Scale | high-volume autonomous systems |

Top-ups are intent-based and reflected in an immutable ledger on confirmation.

## Example cost scenarios (illustrative)

- **Bot triage loop:** 10,000 small requests/day → low predictable spend profile
- **Mixed pipeline:** 60% small, 30% medium, 10% large → balanced spend profile
- **Heavy processing window:** large-tier burst traffic with bounded fallback limits

Use `/estimate_cost` before execution for exact, request-level pricing.

## Enterprise / custom

Available for teams requiring:
- custom limits and dedicated throughput
- private schema packs
- enhanced support/SLA
- tailored onboarding and migration support
