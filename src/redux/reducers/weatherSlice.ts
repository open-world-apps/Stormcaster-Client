import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

/* Weather will be accessible from most parts of the application so instead of
 *  */

interface WeatherState {
   feelsLike: number;
   humidity: number;
   location: string;
   precip: boolean;
   precipAmount: number;
   precipChance: number | string;
   temperature: number;
   uvIndex: number;
}

const initialState: WeatherState = {
   feelsLike: 0,
   humidity: 0,
   location: '',
   precip: false,
   precipAmount: 0,
   precipChance: 0,
   temperature: 0,
   uvIndex: 0
};

export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      incrementTempAmount: (state: WeatherState, action: PayloadAction<number>) => {
         state.temperature += action.payload;
      },
      decrementTempAmount: (state: WeatherState, action: PayloadAction<number>) => {
         state.temperature -= action.payload;
      }
   },
});

export const { incrementTempAmount, decrementTempAmount } = weatherSlice.actions;

export const selectTemp = (state: RootState) => state.weather.temperature;
export const selectFeelsLike = (state: RootState) => state.weather.feelsLike;
export const selectHumidity = (state: RootState) => state.weather.humidity;
export const selectLocation = (state: RootState) => state.weather.location;
export const selectPrecip = (state: RootState) => state.weather.precip;
export const selectPrecipAmount = (state: RootState) => state.weather.precipAmount;
export const selectPrecipChance = (state: RootState) => state.weather.precipChance;
export const selectUvIndex = (state: RootState) => state.weather.uvIndex;

export default weatherSlice.reducer;
