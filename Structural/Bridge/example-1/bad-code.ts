class AlertEmailNotification {
  send() {
    console.log("Sending ALERT via Email");
  }
}

class AlertSMSNotification {
  send() {
    console.log("Sending ALERT via SMS");
  }
}

class ReminderEmailNotification {
  send() {
    console.log("Sending REMINDER via Email");
  }
}

class ReminderSMSNotification {
  send() {
    console.log("Sending REMINDER via SMS");
  }
}

class MarketingPushNotification {
  send() {
    console.log("Sending MARKETING via Push");
  }
}

// usage
const alertEmail = new AlertEmailNotification();
const alertSMS = new AlertSMSNotification();
const reminderEmail = new ReminderEmailNotification();
const reminderSMS = new ReminderSMSNotification();
const marketingPush = new MarketingPushNotification();

alertEmail.send();
alertSMS.send();
reminderEmail.send();
reminderSMS.send();
marketingPush.send();

// Problems:
// Adding a new notification type would require creating multiple new classes for each combination of notification type and channel, 
// code duplication and maintenance issues.
// Violates Open/Closed Principle - we have to modify existing code to add new functionality.
// Tight coupling - the client code is tightly coupled to specific notification classes