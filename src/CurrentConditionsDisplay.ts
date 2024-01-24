import WeatherData, { WeatherDataObserver } from './WeatherData';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  static displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }

  update(currentConditions: WeatherData) {
    CurrentConditionsDisplay.displayCurrentConditions(currentConditions)
  }
}
