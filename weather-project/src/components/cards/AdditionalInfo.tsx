import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import Card from './Card'
import { WindArrowDown, Sunset, Sunrise, ThermometerSun, Cloud, Wind } from 'lucide-react'
import type { Coords } from '../../types'

type AdditionalInfotProps = {
  coords: Coords
}

export default function AdditionalInfo({coords}: AdditionalInfotProps) {

    const {data} = useSuspenseQuery({
    queryKey: ['weather'],
        queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
  })

    return (
        <Card title='Additional Weather Info' childrenClassName="flex flex-col gap-8">
            {rows.map(({label,value, icon}) => {

                const Icon = icon;

                return (
                <div className='flex justify-between' key={value}>
                    <div className='flex gap-4 items-center'>
                        <span className='text-gray-500 '>{label}</span>
                        <Icon size={48}/>
                    </div>
                    <FormatComponent value={value} number={data.current[value]}/>
                </div>
                )
            })}
        </Card>
    )
}

function FormatComponent({value, number}: {value: string, number: number}) {

    if (value === 'sunrise' || value === "sunset" ) return new Date(number * 1000).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })

    return number
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    icon: Cloud,
  },
  {
    label: "UV Index",
    value: "uvi",
    icon: ThermometerSun,
  },
  {
    label: "Wind Direction (°)",
    value: "wind_deg",
    icon: Wind,
  },
  {
    label: "Atmospheric Pressure (hPa)",
    value: "pressure",
    icon: WindArrowDown,
  },    
  {
    label: "Sunrise",
    value: "sunrise",
    icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    icon: Sunset,
  },
] as const;