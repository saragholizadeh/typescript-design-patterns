class InventoryService {
  checkStock(productId: string) {
    console.log('Stock checked');
    return true;
  }
}

class PaymentService {
  pay(orderId: string) {
    console.log('Payment completed');
  }
}

class InvoiceService {
  generate(orderId: string) {
    console.log('Invoice generated');
  }
}

class EmailService {
  sendConfirmation(orderId: string) {
    console.log('Confirmation email sent');
  }
}

class OrderController {
  placeOrder(orderId: string, productId: string) {
    const inventory = new InventoryService();
    const payment = new PaymentService();
    const invoice = new InvoiceService();
    const email = new EmailService();

    if (!inventory.checkStock(productId)) {
      throw new Error('Out of stock');
    }

    payment.pay(orderId);
    invoice.generate(orderId);
    email.sendConfirmation(orderId);
  }
}
