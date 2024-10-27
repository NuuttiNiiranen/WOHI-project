const API_KEY = import.meta.env.VITE_API_KEY;

async function FetchWeatherData({ city, yearsToFetch }) {       

    try {
      var url = null;
      url=`https://api.weatherstack.com/historical?access_key=${API_KEY}&query=${city}&historical_date=${yearsToFetch}&hourly=1`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error! No response!');
      }
      const result = await response.json();
      console.log("Result: ", result);
      return result;
    } catch (error) {
      console.error('We didnt find no data! Maybe you need a new api key!', error);
      return null;
    } finally {
    }
  }

  export default FetchWeatherData