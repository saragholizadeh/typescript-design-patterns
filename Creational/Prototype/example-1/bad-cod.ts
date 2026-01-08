class NotificationTemplate {
  title: string;
  message: string;
  priority: 'low' | 'high';
  channel: 'email' | 'sms' | 'push';
  sender: string;

  constructor() {
    this.title = '';
    this.message = '';
    this.priority = 'low';
    this.channel = 'email';
    this.sender = '';
  }
}

function createWelcomeEmail() {
  const n = new NotificationTemplate();
  n.title = 'Welcome';
  n.message = 'Thanks for joining us!';
  n.priority = 'high';
  n.channel = 'email';
  n.sender = 'system@company.com';
  return n;
}

function createPasswordResetEmail() {
  const n = new NotificationTemplate();
  n.title = 'Reset Password';
  n.message = 'Click the link to reset password';
  n.priority = 'high';
  n.channel = 'email';
  n.sender = 'system@company.com';
  return n;
}

