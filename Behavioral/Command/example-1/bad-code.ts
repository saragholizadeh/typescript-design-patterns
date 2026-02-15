class RemoteControl {
  turnLightOn(light: Light) {
    light.on();
  }

  turnFanOn(fan: Fan) {
    fan.on();
  }

  turnTVOn(tv: TV) {
    tv.on();
  }

  turnLightOff(light: Light) {
    light.off();
  }

  turnFanOff(fan: Fan) {
    fan.off();
  }

  turnTVOff(tv: TV) {
    tv.off();
  }
}

class Light {
  on() { console.log("Light ON"); }
  off() { console.log("Light OFF"); }
}

class Fan {
  on() { console.log("Fan ON"); }
  off() { console.log("Fan OFF"); }
}

class TV {
  on() { console.log("TV ON"); }
  off() { console.log("TV OFF"); }
}

// usage
const remote = new RemoteControl();
const light = new Light();
const fan = new Fan();
const tv = new TV();

remote.turnLightOn(light);
remote.turnFanOn(fan);
remote.turnTVOn(tv);  

/*
Problems
- Remote depends on concrete device classes
- Adding new device → modify RemoteControl
- No undo support
- Violates Open/Closed Principle
- Tight coupling
*/