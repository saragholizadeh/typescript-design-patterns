# Example: Notification System — Using Decorator Pattern


## Scenario

We have an image rendering module.
Images are heavy and expensive to load.

Requirements:

- Load image only when needed

- Client must not know whether image is real or not

- Future extensions like logging or access control should be possible

## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
