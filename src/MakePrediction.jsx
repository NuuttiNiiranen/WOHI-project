import { useEffect, useState } from "react";
import { DateYearsAgo } from "./DateYearsAgo";
import FetchWeatherData from "./FetchWeatherData";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { SearchForm } from "./searchForm";

export function MakePrediction({city, setCity}){    
    const yearsToFetch=[DateYearsAgo(1), DateYearsAgo(2), DateYearsAgo(3), DateYearsAgo(4), DateYearsAgo(5)]
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tempSum, setTempSum] = useState(0);
    const [rainSum, setRainSum] = useState(0);
    const [pictureUrl, setPictureUrl] = useState("");
    

    async function getData() {
        setLoading(true)
        try {
          var newTempSum = 0;
          var newRainSum = 0;
          setLoading(true);
          for (const year of yearsToFetch) {
            if (city !== "" && year) {
              const newData = await FetchWeatherData({ city, yearsToFetch: year });
              newTempSum += newData.historical[year].avgtemp;
              newRainSum += newData.historical[year].hourly[5].precip;
            }
          }
          setTempSum(newTempSum)
          setRainSum(newRainSum)
          
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


        useEffect(() => {
            if (rainSum > 2) {
                setPictureUrl("https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbnxlbnwwfHwwfHx8MA%3D%3D");
            } else if (tempSum > 75) {
                setPictureUrl("https://plus.unsplash.com/premium_photo-1721762404832-90d1beb71c81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bnNoaW5lfGVufDB8fDB8fHww");
            } else {
                setPictureUrl("https://images.unsplash.com/photo-1498085245356-7c3cda3b412f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xvdWR5fGVufDB8fDB8fHww");
            }
        }, [tempSum, rainSum]);

      return(
        <Container className="d-flex flex-column align-items-center">
            {loading ? (
            <Spinner animation="border" />
        ) : (
            <>
            <Col>
            <Row>
            <SearchForm city={city} setCity={setCity}/>
            </Row>
            <Card style={{ width: '18rem' }}>
                      <Card.Img
                          variant="top"
                          src={pictureUrl}
                          alt="Weather Icon"
                      />
                      <Card.Body>
                        <Card.Title>{city}</Card.Title>
                        <Card.Text>
                        Temperature: {(tempSum / 5).toFixed(2)}°C <br />
                        Rain: {(rainSum / 5).toFixed(2)}mm
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </Col>
                    </>)
                }
        </Container>
      )
}