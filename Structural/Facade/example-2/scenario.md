# Example: Order Processing System

## Scenario

We have an order processing system.
To successfully place an order, multiple services must be executed in the correct order:

- Check product inventory
- Process payment
- Generate invoice
- Send confirmation email

The client (e.g., controller) should not care about these internal steps.
It only wants to say:

“Place this order”


## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
