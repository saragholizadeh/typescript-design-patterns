class Truck {
  deliver() {
    console.log("Deliver by land");
  }
}

class Ship {
  deliver() {
    console.log("Deliver by sea");
  }
}

class LogisticsApp {
  deliver(type: "truck" | "ship") {
    if (type === "truck") {
      const truck = new Truck();
      truck.deliver();
    }

    if (type === "ship") {
      const ship = new Ship();
      ship.deliver();
    }
  }
}

// This is not a good code... why?
// - The class LogisticsApp is responsible for creating the objects of Truck and Ship classes. 
// This violates the Single Responsibility Principle.
// 
// - If we want to add more types of logistics, we have to modify the deliver method of LogisticsApp class. 
// This violates the Open/Closed Principle.
// 
// - The LogisticsApp class is tightly coupled with the Truck and Ship classes. 
// This violates the Dependency Inversion Principle.