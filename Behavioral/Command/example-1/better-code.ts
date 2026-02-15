interface Command {
  execute(): void;
  undo(): void;
}

// Receiver Classes
class LightReceiver {
  on() { console.log("Light ON"); }
  off() { console.log("Light OFF"); }
}

class FanReceiver {
  on() { console.log("Fan ON"); }
  off() { console.log("Fan OFF"); }
}

// Concrete Commands
class LightOnCommand implements Command {
  constructor(private light: LightReceiver) {}

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

class FanOnCommand implements Command {
  constructor(private fan: FanReceiver) {}

  execute() {
    this.fan.on();
  }

  undo() {
    this.fan.off();
  }
}

// Invoker

class Remote {
  private history: Command[] = [];

  pressButton(command: Command) {
    command.execute();
    this.history.push(command);
  }

  pressUndo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}

// usage

const light = new LightReceiver();
const fan = new FanReceiver();

const lightOn = new LightOnCommand(light);
const fanOn = new FanOnCommand(fan);

const remote = new Remote();

remote.pressButton(lightOn);
remote.pressButton(fanOn);

remote.pressUndo();
