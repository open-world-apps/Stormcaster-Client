/* TODO: Implement Next Routes using SWR.
   TODO: Move Temperature to WeatherView.
*/

import { FC, ReactElement, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useSWR from 'swr';

import WeatherView from '../layouts/WeatherView';

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { updateWeatherModel } from '../../redux';
import weatherFetcher from '../../util/fetchers/weatherFetcher';

const Weather: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.user.location);
  const weather = useAppSelector((state) => state.weather);
  const recentlyUpdated = useAppSelector((state) => state.weather.recentlyUpdated);

  useEffect(() => {
    const _location = JSON.stringify({
      lat: location.coords?.latitude,
      lon: location.coords?.longitude,
    });

    if (!recentlyUpdated) {
      weatherFetcher(_location, 'english', 'imperial')
        .then((weather) => {
          console.log('Updating weather model...');
          dispatch(updateWeatherModel(weather));
        })
        .catch((err) => console.error(err))
        .finally(() => console.log('Update complete.'));
    }
  }, [location, dispatch, recentlyUpdated]);

  return (
    <Container fluid>
      <WeatherView />
    </Container>
  );
};

export default Weather;
