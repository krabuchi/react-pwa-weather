import axios from 'axios';

const URI = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (query) => {
    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    const { data } = await axios.get( URI, {
        params: {
            q: query,
            units: 'metric',
            APPID: process.env.REACT_APP_WEATHER_API_KEY
        }
    });
    return data;
}

export default fetchWeather;