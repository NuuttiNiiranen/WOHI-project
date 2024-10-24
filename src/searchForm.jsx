import { Button, Form } from "react-bootstrap";

export function SearchForm({FetchWeatherData, city, setCity}){
    const handleSubmit = (e) => {
        e.preventDefault();
        FetchWeatherData(city)
      }

    return(
        <Form className="mb-4 mt-4" onSubmit={handleSubmit}>
      <Form.Group className="d-flex align-items-center" controlId="SearchForCity">
        <Form.Label className="me-2">City: </Form.Label>
        <Form.Control
          type="text"
          placeholder="enter city name like 'Kuopio'"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="me-2"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
    )
}