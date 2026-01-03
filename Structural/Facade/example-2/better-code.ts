class InventoryService {
  checkStock(productId: string): boolean {
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

class OrderFacade {
  private inventory = new InventoryService();
  private payment = new PaymentService();
  private invoice = new InvoiceService();
  private email = new EmailService();

  placeOrder(orderId: string, productId: string) {
    if (!this.inventory.checkStock(productId)) {
      throw new Error('Out of stock');
    }

    this.payment.pay(orderId);
    this.invoice.generate(orderId);
    this.email.sendConfirmation(orderId);
  }
}

// usage
class OrderController {
  private orderFacade = new OrderFacade();

  placeOrder(orderId: string, productId: string) {
    this.orderFacade.placeOrder(orderId, productId);
  }
}
