import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { HistoricalWeather } from './HistoricalWeather';

export default function App(){

return (
  <Container className="justify-content-md-center">
    <HistoricalWeather/>
  </Container>
);
}