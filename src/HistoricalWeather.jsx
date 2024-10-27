import { useState } from "react";
import { SearchForm } from "./searchForm";
import { ShowWeatherCards } from "./ShowWeatherCards";
import { DateYearsAgo } from "./DateYearsAgo";

export function HistoricalWeather({city, setCity}){
    
    const yearsToFetch=[DateYearsAgo(0), DateYearsAgo(1), DateYearsAgo(2), DateYearsAgo(3), DateYearsAgo(4)]

    return(<>
        <SearchForm city={city} setCity={setCity}/>
        <ShowWeatherCards yearsToFetch={yearsToFetch} city={city}/>
    </>
    )
}