interface NotificationSender {
  send(message: string): void;
}

class EmailSender implements NotificationSender {
  send(message: string) {
    console.log("Email:", message);
  }
}

class SmsSender implements NotificationSender {
  send(message: string) {
    console.log("SMS:", message);
  }
}

class NotificationDecorator implements NotificationSender {
  constructor(protected sender: NotificationSender) {}

  send(message: string) {
    this.sender.send(message);
  }
}

class LoggingDecorator extends NotificationDecorator {
  send(message: string) {
    console.log("Log:", message);
    super.send(message);
  }
}

class RetryDecorator extends NotificationDecorator {
  send(message: string) {
    try {
      super.send(message);
    } catch {
      console.log("Retrying...");
      super.send(message);
    }
  }
}

// usage

const sender = new RetryDecorator(
  new LoggingDecorator(
    new SmsSender()
  )
);

sender.send("Welcome!");
