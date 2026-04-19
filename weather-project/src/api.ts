const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({lat, lon}: {lat: number, lon: number}, excludePart: string) {
    const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${excludePart}&appid=${API_KEY}`
    )
    const data = await res.json()
    return data;
}   