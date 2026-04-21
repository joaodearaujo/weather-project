import { GeocodeSchema } from "./schemas/locationSchema";
import { DetailedWeatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({lat, lon}: {lat: number, lon: number}) {
    const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
    )
    const data = await res.json()
    return DetailedWeatherSchema.parse(data);
}   
export async function getCoords(location: string) {
    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
    )
    const data = await res.json()
    return GeocodeSchema.parse(data);
}   