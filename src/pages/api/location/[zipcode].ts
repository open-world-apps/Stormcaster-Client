import type { NextApiRequest, NextApiResponse } from 'next';

import locationFetcher from '../../../util/fetchers/locationFetcher';

const locationHandler = async ({ query: { lat, lon } }: NextApiRequest, res: NextApiResponse) => {
  const nLat = Number(lat);
  const nLon = Number(lon);

  try {
    const coords = { lat: nLat, lon: nLon };
    const location = await locationFetcher(coords);

    res.status(200).json({ location });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export default locationHandler;
