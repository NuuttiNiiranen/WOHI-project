import { SearchForm } from "./searchForm";
import { ShowWeatherCards } from "./ShowWeatherCards";


export function HistoricalWeather({city, setCity}){

    const dateYearsAgo = (yearsAgo) => {
        const date = new Date();
        const year = date.getFullYear() - yearsAgo;
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }
    
    const yearsToFetch=[dateYearsAgo(0), dateYearsAgo(1), dateYearsAgo(2), dateYearsAgo(3)]

    return(<>
        <SearchForm city={city} setCity={setCity}/>
        <ShowWeatherCards yearsToFetch={yearsToFetch} city={city}/>
    </>
    )
}