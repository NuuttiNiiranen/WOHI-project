import { Card, Row, Spinner } from "react-bootstrap";



export function ShowWeatherCards({weatherData, historicalWeather, weatherTwoYearsAgo, loading, lastYear, twoYearsAgo, today}) {

    return(<>
        {loading ? (
            <Spinner animation="border" />
          ) : weatherData && weatherData.current ? (
            <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={weatherData.current.weather_icons[0]} />
              <Card.Body>
                <Card.Title>{weatherData.location.name}</Card.Title>
                <Card.Text>
                    Date: {today} <br />
                    Temperature: {weatherData.current.temperature}°C <br />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={historicalWeather.historical[lastYear].hourly[5].weather_icons[0]} />
            <Card.Body>
              <Card.Title>{historicalWeather.location.name}</Card.Title>
              <Card.Text>
                Date: {historicalWeather.historical[lastYear].date} <br />
                Temperature: {historicalWeather.historical[lastYear].avgtemp}°C <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={weatherTwoYearsAgo.historical[twoYearsAgo].hourly[5].weather_icons[0]} />
          <Card.Body>
              <Card.Title>{weatherTwoYearsAgo.location.name}</Card.Title>
              <Card.Text>
                Date: {weatherTwoYearsAgo.historical[twoYearsAgo].date} <br />
                Temperature: {weatherTwoYearsAgo.historical[twoYearsAgo].avgtemp}°C <br />
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
          ) : (
            <p>No data available yet.</p>
          )}
          </>
    )
}