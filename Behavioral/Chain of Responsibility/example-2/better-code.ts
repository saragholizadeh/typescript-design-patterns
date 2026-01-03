type Ticket = {
  category: 'faq' | 'simple' | 'complex' | 'critical';
  message: string;
};

interface Handler {
  setNext(handler: Handler): Handler;
  handle(ticket: Ticket): void;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(ticket: Ticket): void {
    if (this.nextHandler) {
      this.nextHandler.handle(ticket);
    }
  }
}

class FaqBotHandler extends AbstractHandler {
  handle(ticket: Ticket): void {
    if (ticket.category === 'faq') {
      console.log('FAQ Bot handled the ticket:', ticket.message);
    } else {
      super.handle(ticket);
    }
  }
}

class JuniorSupportHandler extends AbstractHandler {
  handle(ticket: Ticket): void {
    if (ticket.category === 'simple') {
      console.log('Junior Agent handled the ticket:', ticket.message);
    } else {
      super.handle(ticket);
    }
  }
}

class SeniorSupportHandler extends AbstractHandler {
  handle(ticket: Ticket): void {
    if (ticket.category === 'complex') {
      console.log('Senior Agent handled the ticket:', ticket.message);
    } else {
      super.handle(ticket);
    }
  }
}

class ManagerHandler extends AbstractHandler {
  handle(ticket: Ticket): void {
    if (ticket.category === 'critical') {
      console.log('Manager handled the ticket:', ticket.message);
    } else {
      super.handle(ticket);
    }
  }
}

// usage

const faqBot = new FaqBotHandler();
const junior = new JuniorSupportHandler();
const senior = new SeniorSupportHandler();
const manager = new ManagerHandler();

faqBot.setNext(junior).setNext(senior).setNext(manager);

faqBot.handle({ category: 'faq', message: 'How to reset password?' });
faqBot.handle({ category: 'simple', message: 'I cannot login.' });
faqBot.handle({ category: 'complex', message: 'App crashes on upload.' });
faqBot.handle({ category: 'critical', message: 'Data breach detected!' });
