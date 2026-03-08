# Quotes & Payments

AxisCanon uses a prepaid credit model.

## Typical flow
1. `POST /signup/quote`
2. `POST /signup/intent`
3. `GET /signup/intent/{topup_id}`
4. `POST /estimate_cost`
5. `POST /lock_funds`
6. `POST /normalize`

## Guarantees
- No execution without reserved funds
- Lock/settle/release events are ledgered
- No negative balances
