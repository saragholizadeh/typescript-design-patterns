### Example: Email / Notification Builder

Imagine you are building a backend service that sends different types of notifications or emails:

- Marketing emails, transactional emails, alerts, reminders, etc.
- Each email may have different features:
  - Subject
  - Body (HTML or plain text)
  - Recipients (to, cc, bcc)
  - Attachments
  - Optional settings like priority, read receipt, or tracking

❗ The emails can be very different from each other, but most of the steps to construct them are similar.

**bad-code.ts** – here you put the messy code that tries to handle all email variations in one constructor or function