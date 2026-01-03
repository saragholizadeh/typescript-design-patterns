# Example: Customer Support Ticket Handling

## Scenario

We have a customer support system.
Each support ticket goes through a chain:

1. FAQ Bot
If the issue is common → resolve immediately

2. Junior Support Agent
If the issue is simple → handle it

3. Senior Support Agent
If the issue is complex → handle it

4. Manager
If the issue is critical → make final decision

Key rule:

- Only one handler handles the ticket

- Once handled, the chain stops

## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
