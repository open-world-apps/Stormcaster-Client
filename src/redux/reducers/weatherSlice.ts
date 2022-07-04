import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Coords = { lon: number; lat: number };
type Weather =
  | Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>
  | [];
type Main = {
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
};
type Wind = {
  speed: number;
  deg: number;
  gust: number;
};
type Clouds = { all: number };
type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherState = {
  coords: Coords;
  weather: Weather;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  recentlyUpdated: boolean;
};

const initialState: WeatherState = {
  coords: { lon: 0, lat: 0 },
  weather: [],
  base: "",
  main: {
    temp: 0,
    feelsLike: 0,
    tempMin: 0,
    tempMax: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: { speed: 0, deg: 0, gust: 0 },
  clouds: { all: 0 },
  dt: Date.now(),
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
  recentlyUpdated: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeatherModel: (
      state: WeatherState,
      payload: PayloadAction<WeatherState>
    ) => {
      console.log(payload.payload);
      state.coords = payload.payload.coords;
      state.weather = payload.payload.weather;
      state.base = payload.payload.base;
      state.main = payload.payload.main;
      state.visibility = payload.payload.visibility;
      state.wind = payload.payload.wind;
      state.clouds = payload.payload.clouds;
      state.dt = payload.payload.dt;
      state.sys = payload.payload.sys;
      state.timezone = payload.payload.timezone;
      state.id = payload.payload.id;
      state.name = payload.payload.name;
      state.cod = payload.payload.cod;
      state.recentlyUpdated = true;
    },
  },
});

export const { updateWeatherModel } = weatherSlice.actions;

export default weatherSlice.reducer;
