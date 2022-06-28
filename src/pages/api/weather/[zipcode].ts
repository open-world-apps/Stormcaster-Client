import type { NextApiRequest, NextApiResponse } from "next";
import type { Location } from "../../../fetchers/weatherFetcher";

import weatherFetcher from "../../../fetchers/weatherFetcher";
import locationFetcher from "../../../fetchers/locationFetcher";

const weatherHandler = async (
  { query: { zipcode, countrycode, language } }: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const location: Location = await locationFetcher(zipcode, countrycode);

    try {
      const weather = await weatherFetcher(location, language);
      res.status(200).json({ weather });
    } catch {
      res.status(500).json({ message: `Weather could not be fetched.` });
    }
  } catch {
    res.status(404).json({ message: `City is not supported.` });
  }
};

export default weatherHandler;
