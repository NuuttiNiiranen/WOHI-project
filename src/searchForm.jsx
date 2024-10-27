import { Button, Form } from "react-bootstrap";
import FetchWeatherData from "./FetchWeatherData";
import { useState } from "react";

export function SearchForm({city, setCity}){
  const [tempCity, setTempCity] = useState('Kuopio');  
  const handleSubmit = (e) => {
        e.preventDefault();
        setCity(tempCity)
        FetchWeatherData(city)
      }

    return(
        <Form className="mb-4 mt-4" onSubmit={handleSubmit}>
      <Form.Group className="d-flex align-items-center" controlId="SearchForCity">
        <Form.Label className="me-2">City: </Form.Label>
        <Form.Control
          type="text"
          placeholder="enter city name like 'Kuopio'"
          value={tempCity}
          onChange={(e) => setTempCity(e.target.value)}
          className="me-2"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
    )
}