import { z } from 'zod';

const WeatherDescriptionSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const RainSchema = z.object({
  "1h": z.number().optional(),
});

export const DetailedWeatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  
  current: z.object({
    dt: z.number(),
    sunrise: z.number(),
    sunset: z.number(),
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number().min(0).max(100),
    dew_point: z.number(),
    uvi: z.number(),
    clouds: z.number(),
    visibility: z.number(),
    wind_speed: z.number(),
    wind_deg: z.number(),
    weather: z.array(WeatherDescriptionSchema),
    rain: RainSchema.optional(),
  }),

  minutely: z.array(
    z.object({
      dt: z.number(),
      precipitation: z.number(),
    })
  ).optional(),

  hourly: z.array(
    z.object({
      dt: z.number(),
      temp: z.number(),
      feels_like: z.number(),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      clouds: z.number(),
      visibility: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      weather: z.array(WeatherDescriptionSchema),
      pop: z.number(),
      rain: RainSchema.optional(),
    })
  ),

  daily: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      weather: z.array(WeatherDescriptionSchema),
      clouds: z.number(),
      pop: z.number(),
      rain: z.number().optional(),
      uvi: z.number(),
    })
  ),

  alerts: z.array(
    z.object({
      sender_name: z.string(),
      event: z.string(),
      start: z.number(),
      end: z.number(),
      description: z.string(),
    })
  ).optional(),
});

export type DetailedWeather = z.infer<typeof DetailedWeatherSchema>;