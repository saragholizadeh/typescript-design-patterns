interface OrderState {
  confirm(): void;
  ship(): void;
  deliver(): void;
}

class OrderContext {
  private state: OrderState;

  constructor() {
    this.state = new PendingState(this);
  }

  setState(state: OrderState) {
    this.state = state;
  }

  confirm() {
    this.state.confirm();
  }

  ship() {
    this.state.ship();
  }

  deliver() {
    this.state.deliver();
  }
}

class PendingState implements OrderState {
  constructor(private order: OrderContext) {}

  confirm() {
    console.log("Order confirmed");
    this.order.setState(new ConfirmedState(this.order));
  }

  ship() {
    console.log("Cannot ship. Order not confirmed.");
  }

  deliver() {
    console.log("Cannot deliver. Order not shipped.");
  }
}

class ConfirmedState implements OrderState {
  constructor(private order: OrderContext) {}

  confirm() {
    console.log("Already confirmed.");
  }

  ship() {
    console.log("Order shipped");
    this.order.setState(new ShippedState(this.order));
  }

  deliver() {
    console.log("Cannot deliver. Not shipped yet.");
  }
}

class ShippedState implements OrderState {
  constructor(private order: OrderContext) {}

  confirm() {
    console.log("Already confirmed.");
  }

  ship() {
    console.log("Already shipped.");
  }

  deliver() {
    console.log("Order delivered");
    this.order.setState(new DeliveredState(this.order));
  }
}

class DeliveredState implements OrderState {
  constructor(private order: OrderContext) {}

  confirm() {
    console.log("Order already completed.");
  }

  ship() {
    console.log("Order already completed.");
  }

  deliver() {
    console.log("Order already delivered.");
  }
}

// Usage: 
const orderContext = new OrderContext();

orderContext.confirm();
orderContext.ship();
orderContext.deliver();

/*
✅ BENEFITS:
- No conditionals in OrderContext
- Easy to add new state
- Follows Open/Closed Principle
- Each state isolated
- Cleaner business logic
*/
