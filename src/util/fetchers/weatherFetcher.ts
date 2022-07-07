import axios from 'axios';

import type { WeatherState } from '../../redux/reducers/weatherSlice';

type ReturnPromise = (
  location: string | string[],
  language: string | string[],
  units: string | string[]
) => Promise<WeatherState>;

const weatherFetcher: ReturnPromise = async (location, language, units) => {
  const _location = JSON.parse(location.toString());
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${_location.lat}&lon=${_location.lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_OW_KEY}&lang=${language}`
  );

  if (res.status !== 200) throw new Error(res.data.message);

  return res.data;
};

export default weatherFetcher;
