# Order Workflow System

We are building a simple order workflow module.

An order can be in one of the following states:
- Pending
- Confirmed
- Shipped
- Delivered

Transitions:
- Pending → Confirmed
- Confirmed → Shipped
- Shipped → Delivered
- Delivered → No further transition


## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
