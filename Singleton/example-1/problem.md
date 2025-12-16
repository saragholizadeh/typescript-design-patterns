# Database Singleton Example

Task: We want to access the database 

There are two approaches:

- **bad-code.ts**: Creates a new database connection every time. Heavy, messy, we are not happy,we don't have money for scaling the server up everyday
- **better-code.ts**: Uses Singleton to create only one instance. Clean and awesome.
