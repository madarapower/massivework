import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1f45734017795e486ebf6d230a53ce42';

export const fetchWeather =async (query) => {

    const {data} = await axios.get(URL,{
        
        params: {
            q: query,
            units:'metric',
            APPID: API_KEY,
        }

    });
    return data;
}