## Example: Application Configuration (Config Service)
Scenario

Imagine you are building a backend application (NestJS / Node.js).
The application has a central configuration service that is responsible for managing:

- Environment variables

- Feature flags

- Application settings

- Third-party service keys


❗ This configuration:

- Is expensive to initialize (reading env files, parsing values, validating configs)

- Must be loaded only once during the application lifecycle

- Should be shared across all services to ensure consistency

Your goal is to design the system in a way that all parts of the application access the same configuration instance, without reloading or duplicating it.

