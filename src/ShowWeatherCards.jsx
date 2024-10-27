import { Card, Row, Spinner } from "react-bootstrap";
import FetchWeatherData from "./FetchWeatherData";
import { useEffect, useState } from "react";



export function ShowWeatherCards({city, yearsToFetch}) {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)

  async function getData() {
    const data = [];
    for (const year of yearsToFetch){
      console.log("We got here, year: ", year)
      const newData = await FetchWeatherData({ city, yearsToFetch: year });
      data.push(newData);
    }
    setWeatherData(data)
    setLoading(false)
  }

  useEffect(()=>{
    getData()
  }, [city])

    return(<>
        {loading ? (
            <Spinner animation="border" />
          ) : ( 
            <Row>
                {weatherData.map((data, index) => {
                    return (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data?.historical[yearsToFetch[index]]?.hourly?.[5]?.weather_icons?.[0]} />
                            <Card.Body>
                                <Card.Title>{data?.location?.name}</Card.Title>
                                <Card.Text>
                                    Date: {data?.historical[yearsToFetch[index]]?.date} <br />
                                    Temperature: {data?.historical[yearsToFetch[index]]?.avgtemp}°C <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
          )
        }
      </>
  )
}