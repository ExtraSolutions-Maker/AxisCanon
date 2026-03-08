# Public Metrics (Sanitized)

AxisCanon exposes only aggregated trust metrics publicly.

## Public metrics set
- Uptime %
- p50 / p95 latency (global)
- Total requests (bucketed)
- Success rate
- Incident history

## What is intentionally excluded
- Customer-level or API-key-level usage
- Account balances, lock IDs, or ledger internals
- Any identifiers that could reveal customer behavior
- Abuse/rate-limit forensic detail

## Publishing model
- Website shows high-level summary cards and status timeline.
- Include a visible `Last updated: YYYY-MM-DD HH:MM UTC` marker.
- Detailed internal observability remains private in `AxisCanon-core` dashboards.
