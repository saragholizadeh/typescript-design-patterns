class NotificationService {
  send(message: string, type: "email" | "sms") {
    // logging
    console.log("Log:", message);

    try {
      if (type === "email") {
        console.log("Email:", message);
      }
      if (type === "sms") {
        console.log("SMS:", message);
      }
    } catch {
      console.log("Retrying...");
      if (type === "email") {
        console.log("Email:", message);
      }
      if (type === "sms") {
        console.log("SMS:", message);
      }
    }
  }
}

// usage
const notifier = new NotificationService();
notifier.send("Welcome!", "email");

// Problems

// All behaviors are inside one big class (God-Object)
// Adding Telegram, WhatsApp, etc. requires editing the class (violates Open/Closed Principle)
// Hard to test because logic is mixed in one flow
