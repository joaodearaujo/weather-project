import { type Dispatch, type SetStateAction } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type LocationDropdownProps = {
    location: string,
    setLocation: Dispatch<SetStateAction<string>>
}

export default function LocationDropdown({location, setLocation}: LocationDropdownProps) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
        <SelectTrigger className="w-45">
            <SelectValue placeholder="World Cities" />
        </SelectTrigger>
        <SelectContent className="z-1001">
            <SelectGroup>
                {Locations.map((city) => 
                    <SelectItem 
                        key={city}
                        value={city}
                    >
                    {city}
                    </SelectItem>)}
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

const Locations = [
  "Amsterdam",
  "Barcelona",
  "Beijing",
  "Berlin",
  "Cairo",
  "Dubai",
  "Hong Kong",
  "Istanbul",
  "Lisbon",
  "London",
  "Los Angeles",
  "Madrid",
  "Mexico City",
  "New York",
  "Paris",
  "Rio de Janeiro",
  "Rome",
  "Seoul",
  "São Paulo",
  "Tokyo"
];
