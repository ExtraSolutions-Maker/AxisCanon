# AxisCanon

Public product surface for AxisCanon: deterministic text normalization API infrastructure.

## What this repo contains
- Public-facing landing page (`index.html`)
- Product docs (`docs/`)
- Positioning, capabilities, and billing flow references

## What this repo does NOT contain
- Internal service implementation
- Private billing logic internals
- Infrastructure or secret configuration

Core implementation lives in private repo: `ExtraSolutions-Maker/AxisCanon-core`.

## Core model
- Prepaid only
- Atomic-only API calls
- Bounded execution
- Auditable billing ledger

## Key flows
1. Estimate cost
2. Lock funds
3. Execute normalization
4. Settle actual cost
5. Release remainder
