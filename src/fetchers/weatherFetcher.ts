import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./../../../.env") });

export interface Location {
  lat: string;
  lon: string;
}

type Language = string | string[];
type ReturnPromise = (location: Location, language: Language) => Promise<void>;

const weatherFetcher: ReturnPromise = async (location, language) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.OW_KEY}&lang=${language}`
  );
  const data = await res.data;

  if (res.status !== 200) throw new Error(data.message);

  return data;
};

export default weatherFetcher;
