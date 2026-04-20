import React from 'react'

type WeatherIconProps = {
    src: string,
}

export default function WeatherIcon({src}: WeatherIconProps) {
  return (
    <img
        className='size-8' 
        src={`https://openweathermap.org/payload/api/media/file/${src}.png}`} 
        alt="Weather Icon" 
    />
  )
}


