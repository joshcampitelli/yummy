import { FETCH_ELIGIBLE_RESTAURANTS } from './swiping.types';
import { userGameSettings, fetchEligibleRestaurantsEndpoint } from '../fixtures';

export const fetchEligibleRestaurants = async (
  offset = 0,
) => {
  const results = await fetch(fetchEligibleRestaurantsEndpoint, {
    method: 'POST',
    body: JSON.stringify({ ...userGameSettings, offset }),
    headers: { 'Content-type': 'application/json' },
  });

  const content = await results.json();
  
  return {
    type: FETCH_ELIGIBLE_RESTAURANTS,
    payload: content,
  }
}