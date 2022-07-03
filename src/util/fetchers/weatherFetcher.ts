import axios from "axios";

import envLoader from "../envLoader";

envLoader();

type ReturnPromise = (
  location: string | string[],
  language: string | string[]
) => Promise<void>;

const weatherFetcher: ReturnPromise = async (location, language) => {
  const _location = JSON.parse(location.toString());
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${_location.latitude}&lon=${_location.longitude}&appid=${process.env.OW_KEY}&lang=${language}`
  );
  const data = await res.data;

  if (res.status !== 200) throw new Error(data.message);

  return data;
};

export default weatherFetcher;
