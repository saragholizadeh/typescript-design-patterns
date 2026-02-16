interface Device {
    receive(event: string): void;
}

class LightDevice implements Device {
    receive(event: string) {
        if (event === "turnOnLight") console.log("Light ON");
        if (event === "turnOffLight") console.log("Light OFF");
    }
}

class FanDevice implements Device {
    receive(event: string) {
        if (event === "turnOnFan") console.log("Fan ON");
        if (event === "turnOffFan") console.log("Fan OFF");
    }
}

class Mediator {
    private devices: Device[] = [];
    register(device: Device) { this.devices.push(device); }
    notify(event: string) {
        this.devices.forEach(d => d.receive(event));
    }
}

// Usage
const mediator = new Mediator();
const lightDevice = new LightDevice();
const fanDevice = new FanDevice();
mediator.register(lightDevice);
mediator.register(fanDevice);

mediator.notify("turnOnLight");
mediator.notify("turnOffFan");

