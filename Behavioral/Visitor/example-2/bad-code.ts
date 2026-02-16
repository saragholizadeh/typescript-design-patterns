class EmailNotification {
  constructor(public recipient: string, public message: string) {}
}
class SMSNotification {
  constructor(public recipient: string, public message: string) {}
}
class PushNotification {
  constructor(public recipient: string, public message: string) {}
}

const notifications = [
  new EmailNotification("xxxx@example.com", "Hello X!"),
  new SMSNotification("1234567890", "Hello B!"),
  new PushNotification("user123", "Welcome!")
];

notifications.forEach(n => {
  if (n instanceof EmailNotification) {
    console.log(`Sending email to ${n.recipient}: ${n.message}`);
  } else if (n instanceof SMSNotification) {
    console.log(`Sending SMS to ${n.recipient}: ${n.message}`);
  } else if (n instanceof PushNotification) {
    console.log(`Sending push notification to ${n.recipient}: ${n.message}`);
  }
});

// Problems:
// 1. Violation of Open/Closed Principle: Adding new notification types requires modifying the sending logic.
// 2. Code Duplication: The sending logic is duplicated for each notification type, making it error-prone and hard to maintain.
// 3. Tight Coupling: The sending logic is tightly coupled with the notification classes, making it difficult to change one without affecting the other.

