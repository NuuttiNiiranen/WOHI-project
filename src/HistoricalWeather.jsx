import { SearchForm } from "./searchForm";
import { ShowWeatherCards } from "./ShowWeatherCards";


export function HistoricalWeather({FetchWeatherData, city, setCity, weatherData, historicalWeather, weatherTwoYearsAgo, loading, dateYearsAgo}){
    const today=dateYearsAgo(0)
    const lastYear=dateYearsAgo(1)
    const twoYearsAgo=dateYearsAgo(2)



    return(<>
        <SearchForm FetchWeatherData={FetchWeatherData} city={city} setCity={setCity}/>
        <ShowWeatherCards weatherData={weatherData} historicalWeather={historicalWeather} weatherTwoYearsAgo={weatherTwoYearsAgo} 
        loading={loading} lastYear={lastYear} twoYearsAgo={twoYearsAgo} today={today}/>
    </>
    )
}