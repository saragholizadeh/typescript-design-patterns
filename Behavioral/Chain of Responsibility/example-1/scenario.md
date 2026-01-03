# Example: API system

### Scenario
 
In an API system, each request must pass several sequential checks:

- Authentication

- Rate limiting

- Data validation

- Permission check

If any step fails → request stops immediately.

These checks must be:

1. Reusable
2. Reorderable
3. Extensible

## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
