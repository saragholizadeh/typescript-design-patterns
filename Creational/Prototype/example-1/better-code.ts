interface Prototype<T> {
  clone(): T;
}

class NotificationTemp implements Prototype<NotificationTemp> {
  constructor(
    public title: string,
    public message: string,
    public priority: 'low' | 'high',
    public channel: 'email' | 'sms' | 'push',
    public sender: string
  ) {}

  clone(): NotificationTemp {
    return new NotificationTemp(
      this.title,
      this.message,
      this.priority,
      this.channel,
      this.sender
    );
  }
}

class NotificationRegistry {
  private static templates = new Map<string, NotificationTemp>();

  static register(key: string, prototype: NotificationTemp) {
    this.templates.set(key, prototype);
  }

  static create(key: string): NotificationTemp {
    const prototype = this.templates.get(key);
    if (!prototype) {
      throw new Error('Template not found');
    }
    return prototype.clone();
  }
}

// usage

NotificationRegistry.register(
  'WELCOME_EMAIL',
  new NotificationTemp(
    'Welcome',
    'Thanks for joining us!',
    'high',
    'email',
    'test@gmail.com'
  )
);

NotificationRegistry.register(
  'RESET_PASSWORD',
  new NotificationTemp(
    'Reset Password',
    'Click the link to reset password',
    'high',
    'email',
    'test@gmail.com'
  )
);

const welcome = NotificationRegistry.create('WELCOME_EMAIL');
welcome.message = 'Welcome babe!';

const reset = NotificationRegistry.create('RESET_PASSWORD');
