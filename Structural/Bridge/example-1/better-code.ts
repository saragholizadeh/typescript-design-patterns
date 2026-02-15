interface NotificationChannel {
  sendMessage(message: string): void;
}

// Concrete Implementations

class EmailChannel implements NotificationChannel {
  sendMessage(message: string) {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  sendMessage(message: string) {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushChannel implements NotificationChannel {
  sendMessage(message: string) {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Abstraction (Message Side)

abstract class ANotification {
  constructor(protected channel: NotificationChannel) {}

  abstract send(): void;
}

// Refined Abstractions

class AlertNotification extends ANotification {
  send() {
    this.channel.sendMessage("Alert message");
  }
}

class ReminderNotification extends ANotification {
  send() {
    this.channel.sendMessage("Reminder message");
  }
}

class MarketingNotification extends ANotification {
  send() {
    this.channel.sendMessage("Marketing campaign");
  }
}


// usage

const email = new EmailChannel();
const sms = new SMSChannel();

const alertNotification = new AlertNotification(email);
alertNotification.send();

const reminderNotification = new ReminderNotification(sms);
reminderNotification.send();