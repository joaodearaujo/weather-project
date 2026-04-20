import { useQuery } from '@tanstack/react-query'
import './App.css'
import { getWeather } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'

function App() {

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 50, lon: 50}),
  })

  return (
  <div className='flex flex-col gap-8'>
    <HourlyForecast></HourlyForecast>
    <DailyForecast></DailyForecast>
  </div>
  )
}

export default App
  