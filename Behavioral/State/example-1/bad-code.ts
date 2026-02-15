class Order {
  private state: string = "Pending";

  confirm() {
    if (this.state === "Pending") {
      this.state = "Confirmed";
    } else {
      console.log("Cannot confirm order in current state");
    }
  }

  ship() {
    if (this.state === "Confirmed") {
      this.state = "Shipped";
    } else {
      console.log("Cannot ship order in current state");
    }
  }

  deliver() {
    if (this.state === "Shipped") {
      this.state = "Delivered";
    } else {
      console.log("Cannot deliver order in current state");
    }
  }

  getState() {
    return this.state;
  }
}

// CLIENT
const order = new Order();

order.confirm();
order.ship();
order.deliver();

console.log(order.getState());

/*
PROBLEMS:
- Heavy use of conditionals
- Every new state requires modifying this class
- Violates Open/Closed Principle
- Hard to maintain if states grow
- State logic tightly coupled to Order
*/
