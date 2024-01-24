import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import WeatherData, { WeatherDataObserver } from './WeatherData';

const weatherData = new WeatherData();

// List of weather observers:
const observers: Array<WeatherDataObserver> = [
    new ForecastDisplay(),
    new CurrentConditionsDisplay(),
    new HeatIndexDisplay(),
    new StatisticsDisplay(),
]

// Register each of the observers:
observers.forEach((observer) => {
    weatherData.register(observer);
});

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
