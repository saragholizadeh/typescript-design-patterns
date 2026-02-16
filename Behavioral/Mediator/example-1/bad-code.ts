class Light {
    isOn = false;
    fan: Fan | null = null;

    turnOn() {
        this.isOn = true;
        console.log("Light is ON");
        if (this.fan) this.fan.turnOn(); 
    }
    turnOff() { this.isOn = false; console.log("Light is OFF"); }
}

class Fan {
    isOn = false;
    turnOn() { this.isOn = true; console.log("Fan is ON"); }
    turnOff() { this.isOn = false; console.log("Fan is OFF"); }
}

// Usage
const light = new Light();
const fan = new Fan();
light.fan = fan;

light.turnOn(); // Light ON + Fan ON

//Problems:
// 1. Tight coupling: Light directly controls Fan, making it hard to change or reuse.
// 2. Single Responsibility Violation: Light is responsible for its own state and also controlling the Fan.
// 3. Difficult to maintain: Adding more devices would require modifying Light, leading to code that is hard to manage and extend.