import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Spinner, Card, Col, Row } from 'react-bootstrap';
import { HistoricalWeather } from './HistoricalWeather';

export default function App(){

return (
  <Container className="justify-content-md-center">
    <HistoricalWeather/>
  </Container>
);
}