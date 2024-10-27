import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HistoricalWeather } from './HistoricalWeather';
import { useState } from 'react';
import { Route, Routes, HashRouter as Router, Link} from 'react-router-dom'
import { MakePrediction } from './MakePrediction';

export default function App(){
  const [city, setCity] = useState("Kuopio")


return (
  <Router>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Weatherapp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Historical weather</Nav.Link>
            <Nav.Link as={Link} to="/MakePrediction">Weatherforecast</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <Routes>
        <Route path="/" element={<HistoricalWeather city = {city} setCity = {setCity}/>} />
        <Route path="/MakePrediction" element={<MakePrediction city={city} setCity={setCity}/>} />
   </Routes>
</Router>
)
}