// Observer
interface Observer {
  update(temperature: number): void;
}

// Concrete Observers
class WebDisplay implements Observer {
  update(temperature: number) {
    console.log(`Web updated: ${temperature}`);
  }
}

class MobileApp implements Observer {
  update(temperature: number) {
    console.log(`Mobile updated: ${temperature}`);
  }
}

class LEDDisplay implements Observer {
  update(temperature: number) {
    console.log(`LED Display updated: ${temperature}`);
  }
}

// Subject
class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setTemperature(temp: number) {
    this.temperature = temp;
    this.notifyObservers();
  }

  private notifyObservers() {
    this.observers.forEach(o => o.update(this.temperature));
  }
}

// usage
const station = new WeatherStation();

const web = new WebDisplay();
const mobile = new MobileApp();
const led = new LEDDisplay();

station.addObserver(web);
station.addObserver(mobile);
station.addObserver(led);

station.setTemperature(25);
station.setTemperature(30);
