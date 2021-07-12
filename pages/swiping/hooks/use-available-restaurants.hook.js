import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentGameRestaurants } from '../../../store/selectors';
import { fetchEligibleRestaurants } from '../../../store/swiping';

export const useAvailableRestaurants = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectCurrentGameRestaurants);

  // fetch the initial batch of restaurants
  useEffect(() => {
    (async () => {
      dispatch(await fetchEligibleRestaurants());
    })();
  }, []);

  return {
    current: restaurants,
    fetchMore: async (offset = 0) => {
      dispatch(await fetchEligibleRestaurants(offset));
    },
  };
};
