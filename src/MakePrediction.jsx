import { useEffect, useState } from "react";
import { DateYearsAgo } from "./DateYearsAgo";
import FetchWeatherData from "./FetchWeatherData";
import { Card } from "react-bootstrap";

export function MakePrediction({city}){    
    const yearsToFetch=[DateYearsAgo(1), DateYearsAgo(2), DateYearsAgo(3), DateYearsAgo(4), DateYearsAgo(5)]
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tempSum, setTempSum] = useState(0);
    const [rainSum, setRainSum] = useState(0);

    

    async function getData() {
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
      return(
        <div>
            <Card style={{ width: '18rem' }}>
                      <Card.Img
                          variant="top"
                          src={""}
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
        </div>
      )
}