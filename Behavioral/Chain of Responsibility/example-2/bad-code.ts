type Ticket = {
  category: 'faq' | 'simple' | 'complex' | 'critical';
  message: string;
};

class SupportController {
  handleTicket(ticket: Ticket) {
    if (ticket.category === 'faq') {
      console.log('FAQ Bot handled the ticket:', ticket.message);
    } else if (ticket.category === 'simple') {
      console.log('Junior Agent handled the ticket:', ticket.message);
    } else if (ticket.category === 'complex') {
      console.log('Senior Agent handled the ticket:', ticket.message);
    } else if (ticket.category === 'critical') {
      console.log('Manager handled the ticket:', ticket.message);
    } else {
      console.log('Unknown ticket category');
    }
  }
}

// Usage
const controller = new SupportController();

controller.handleTicket({ category: 'faq', message: 'How to reset password?' });
controller.handleTicket({ category: 'critical', message: 'Data breach!' });
