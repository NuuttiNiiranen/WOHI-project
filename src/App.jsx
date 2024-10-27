import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Spinner, Card, Col, Row } from 'react-bootstrap';
import { HistoricalWeather } from './HistoricalWeather';

export default function App(){
const [city, setCity] = useState("Kuopio")

return (
  <Container className="justify-content-md-center">
    <HistoricalWeather
    city={city} 
    setCity={setCity} 
    />
  </Container>
);
}