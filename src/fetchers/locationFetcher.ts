import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

import type { Location } from "./weatherFetcher";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./../../../.env") });

type Zipcode = string | string[];
type Countrycode = string | string[];
type ReturnPromise = (
  zipcode: Zipcode,
  countrycode: Countrycode
) => Promise<Location>;

const locationFetcher: ReturnPromise = async (zipcode, countrycode) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countrycode}&appid=${process.env.OW_KEY}`
  );
  const data = await res.data;

  if (res.status !== 200) throw new Error(data.message);

  return data;
};

export default locationFetcher;
