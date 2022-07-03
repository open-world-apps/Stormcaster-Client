import axios from "axios";

import envLoader from "../envLoader";

import type { Location } from "../../redux/reducers/userSlice";

envLoader();

type ReturnPromise = (location: Location) => Promise<Location>;

const locationFetcher: ReturnPromise = async (location) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${
      location.coords!.latitude
    }&lon=${location.coords!.longitude}&appid=${process.env.OW_KEY}`
  );
  const data = await res.data;

  if (res.status !== 200) throw new Error(data.message);

  return data;
};

export default locationFetcher;
