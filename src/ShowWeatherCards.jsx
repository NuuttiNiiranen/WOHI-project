import { Card, Row, Spinner, Alert } from "react-bootstrap";
import FetchWeatherData from "./FetchWeatherData";
import { useEffect, useState } from "react";

export function ShowWeatherCards({ city, yearsToFetch }) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      setLoading(true);
      const data = [];
      for (const year of yearsToFetch) {
        if (city !== "" && year) {
          const newData = await FetchWeatherData({ city, yearsToFetch: year });
          data.push(newData);
        }
      }
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (city) {
      getData();
    }
  }, [city]);

  return (
      <>
        {loading ? (
            <Spinner animation="border" />
        ) : error ? (
            <Alert variant="danger">{error}</Alert>
        ) : (
            <Row>
              {weatherData.map((data, index) => {
                const yearData = data?.historical?.[yearsToFetch[index]];
                return yearData ? (
                    <Card key={index} style={{ width: '18rem' }}>
                      <Card.Img
                          variant="top"
                          src={yearData?.hourly?.[5]?.weather_icons?.[0] || ""}
                          alt="Weather Icon"
                      />
                      <Card.Body>
                        <Card.Title>{data?.location?.name || "Unknown Location"}</Card.Title>
                        <Card.Text>
                          Date: {yearData?.date || "N/A"} <br />
                          Temperature: {yearData?.avgtemp || "N/A"}°C <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                ) : (
                    <Alert key={index} variant="warning">
                      Weather data for {yearsToFetch[index]} is unavailable.
                    </Alert>
                );
              })}
            </Row>
        )}
      </>
  );
}