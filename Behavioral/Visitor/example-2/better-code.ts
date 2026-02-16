interface NotificationVisitor {
  visitEmail(notification: EmailNotification): void;
  visitSMS(notification: SMSNotification): void;
  visitPush(notification: PushNotification): void;
}

class EmailNotification {
  constructor(public recipient: string, public message: string) {}
  accept(visitor: NotificationVisitor) {
    visitor.visitEmail(this);
  }
}

class SMSNotification {
  constructor(public recipient: string, public message: string) {}
  accept(visitor: NotificationVisitor) {
    visitor.visitSMS(this);
  }
}

class PushNotification {
  constructor(public recipient: string, public message: string) {}
  accept(visitor: NotificationVisitor) {
    visitor.visitPush(this);
  }
}

// Concrete Visitor
class NotificationSender implements NotificationVisitor {
  visitEmail(notification: EmailNotification) {
    console.log(`Sending email to ${notification.recipient}: ${notification.message}`);
  }
  visitSMS(notification: SMSNotification) {
    console.log(`Sending SMS to ${notification.recipient}: ${notification.message}`);
  }
  visitPush(notification: PushNotification) {
    console.log(`Sending push notification to ${notification.recipient}: ${notification.message}`);
  }
}


// Usage
const notifications = [
  new EmailNotification("aaaa@example.com", "Hello AAA!"),
  new SMSNotification("1234567890", "Hello BBB!"),
  new PushNotification("user123", "Welcome!")
];

const sender = new NotificationSender();
notifications.forEach(n => n.accept(sender));
