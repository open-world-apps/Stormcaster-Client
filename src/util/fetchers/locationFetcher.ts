import axios from 'axios';

type Location = { lat: number; lon: number };
type ReturnPromise = (location: Location) => Promise<Location>;

const locationFetcher: ReturnPromise = async (location) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&appid=${process.env.OW_KEY}`
  );
  const data = await res.data;

  if (res.status !== 200) throw new Error(data.message);

  return data;
};

export default locationFetcher;
