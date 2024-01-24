import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';

export interface WeatherDataObserver {
  update(currentConditions: WeatherData): void
}

export default class WeatherData {
  private _temperature = 0;
  
  private _observers: WeatherDataObserver[] = [];

  get temperature(): number {
    return this._temperature;
  }

  private _humidity = 0;

  get humidity(): number {
    return this._humidity;
  }

  private _pressure = 0;

  get pressure(): number {
    return this._pressure;
  }

  private _statisticsDisplay = new StatisticsDisplay();

  private _forecastDisplay = new ForecastDisplay();

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  private measurementsChanged() {
    this._statisticsDisplay.displayStatistics(this);
    this._forecastDisplay.displayForecast(this);
    CurrentConditionsDisplay.displayCurrentConditions(this);
    HeatIndexDisplay.displayHeatIndex(this);
  }

  public register(observer: WeatherDataObserver): void {
    this._observers.push(observer);
  }

  public deregisterObserver(observer: WeatherDataObserver): void {
   const index = this._observers.indexOf(observer);
    if (index !== -1) {
      this._observers.splice(index, 1);
    }
  }
}
