import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import Card from './Card'
import WeatherIcon from '../WeatherIcon'
import type { Coords } from '../../types'

type HourlyForecastProps = {
    coords: Coords
}

export default function HourlyForecast({coords}: HourlyForecastProps) {

    const {data} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
  })

    return (
        <Card title='Hourly Forecast' childrenClassName="flex flex-row gap-6 overflow-y-auto">
            {data.hourly.map(hour => (
                <div className='flex flex-col gap-2 items-center p-2'>
                    <p className='whitespace-nowrap'>{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}</p>
                    <WeatherIcon src={hour.weather[0].icon} />
                    <p className='text-gray-500/75'>{Math.round(hour.temp)}°C</p>
                </div>
            ))}
        </Card>
    )
}