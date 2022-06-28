import type { NextApiRequest, NextApiResponse } from "next";
import type { Location } from "../../../fetchers/weatherFetcher";

import locationFetcher from "../../../fetchers/locationFetcher";

const locationHandler = async (
  { query: { zipcode, countrycode } }: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const location: Location = await locationFetcher(zipcode, countrycode);

    res.status(200).json({ location });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export default locationHandler;
