import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = 'a4ce7320f5dfefefee3eb0e766e74e9a';

export const fetchWeather = async (query) => {
    const { data } = await axios.get( URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}
