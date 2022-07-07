import type { NextApiRequest, NextApiResponse } from 'next';

import weatherFetcher from '../../../util/fetchers/weatherFetcher';

const weatherHandler = async (
  { query: { userLocation, lang, units } }: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const weather = await weatherFetcher(userLocation, lang, units);

    res.status(200).json({ weather });
  } catch {
    res.status(500).json({ message: `Weather could not be fetched.` });
  }
};

export default weatherHandler;
