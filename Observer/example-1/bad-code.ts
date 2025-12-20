class WeatherStation {
  private temperature: number = 0;

  setTemperature(temp: number) {
    this.temperature = temp;
    
    console.log(`Web updated: ${this.temperature}`);
    console.log(`Mobile updated: ${this.temperature}`);
    console.log(`LED Display updated: ${this.temperature}`);
  }
}

// usage
const station = new WeatherStation();
station.setTemperature(25);
station.setTemperature(30);
