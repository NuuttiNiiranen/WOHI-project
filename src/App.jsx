import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Spinner, Card, Col, Row } from 'react-bootstrap';
import { SearchForm } from './searchForm';
import { ShowWeatherCards } from './ShowWeatherCards';
import { HistoricalWeather } from './HistoricalWeather';


export default function App(){
const [city, setCity] = useState("Kuopio")
const [weatherData, setWeatherData] = useState(null)
const [historicalWeather, setHistoricalWeather] = useState(null)
const [loading, setLoading] = useState(null)
const [weatherTwoYearsAgo, setWeatherTwoYearsAgo] = useState(null);

const dateYearsAgo = (years) => {
  const date = new Date();
  const year = date.getFullYear()-years;
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const today = dateYearsAgo(0);
const lastYear = dateYearsAgo(1);
const twoYearsAgo = dateYearsAgo(2);

async function FetchWeatherData(city){
  try {
    const CurrentUrl = `https://api.weatherstack.com/current?access_key=b9ca95d0ff78adf60954e46b4b9584f1&query=${city}`;
    const historicalUrl = `https://api.weatherstack.com/historical?access_key=b9ca95d0ff78adf60954e46b4b9584f1&query=${city}&historical_date=${lastYear}&hourly=1`
    const TwoYearUrl = `https://api.weatherstack.com/historical?access_key=b9ca95d0ff78adf60954e46b4b9584f1&query=${city}&historical_date=${twoYearsAgo}&hourly=1`

    setLoading(true);
    const response = await fetch(CurrentUrl);
    const historicalResponse = await fetch(historicalUrl)
    const twoYearResponse = await fetch(TwoYearUrl)
    if (!response.ok||!historicalResponse.ok||!twoYearResponse.ok) {
      throw new Error('Error! No response!');
    }
    const result = await response.json();
    const historicalResult = await historicalResponse.json();
    const twoYearResult = await twoYearResponse.json();
    console.log("Result: ", result);
    console.log("HistoricalResult: ", historicalResult)
    console.log("Two year result", twoYearResult)
    setWeatherData(result);
    setHistoricalWeather(historicalResult);
    setWeatherTwoYearsAgo(twoYearResult)
  } catch (error) {
    console.error('We didnt find no data! Maybe you need a new api key!', error);
    setWeatherData(null);
    return null;
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  FetchWeatherData(city);
}, []);

return (
  <Container className="justify-content-md-center">
    <HistoricalWeather
    dateYearsAgo={dateYearsAgo} 
    FetchWeatherData={FetchWeatherData} 
    city={city} 
    setCity={setCity} 
    weatherData={weatherData} 
    historicalWeather={historicalWeather} 
    weatherTwoYearsAgo={weatherTwoYearsAgo}
    loading={loading}
    />
  </Container>
);
}