# Example: User Role Builder — Using Decorator Pattern

## Scenario
We need a simple system that returns a user's final role description.

Originally, users only had one base role: `"User"`.
Later, business requirements added more optional tiers:
- Premium members
- Admin users
- Plus promotion users

Users may now have multiple combined roles:
Examples:
- User + Premium
- User + Admin
- User + Premium + Admin + Plus

---

## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
