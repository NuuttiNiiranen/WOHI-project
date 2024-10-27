import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HistoricalWeather } from './HistoricalWeather';
import { useState } from 'react';
import { Route, Routes, HashRouter as Router, Link, Navigate} from 'react-router-dom'
import { MakePrediction } from './MakePrediction';
import LogIn from './logIn';

export default function App(){
  const [city, setCity] = useState("")
  const [authenticated, setAuthenticated] = useState(false);

return (
  <Router>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Weatherapp</Navbar.Brand>
          <Nav className="me-auto">
              <Link className="me-3" to="/HistoricalWeather">History</Link>
              <Link className="me-3" to="/MakePrediction">Forecast</Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/" element={authenticated ? <Navigate to="/MakePrediction"/> : <LogIn setAuthenticated={setAuthenticated}/>}/>
      <Route path="/MakePrediction" element={authenticated ? <MakePrediction city={city} setCity={setCity}/> : <Navigate to="/"/>} />
      <Route path="/HistoricalWeather" element={authenticated ? <HistoricalWeather city={city} setCity={setCity}/> : <Navigate to="/"/>} />
    </Routes>
</Router>
)
}