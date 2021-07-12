import { FETCH_ELIGIBLE_RESTAURANTS } from './swiping.types';
import { USER_GAME_SETTINGS, FETCH_ELIGIBLE_RESTAURANTS_URL } from '../fixtures';

export const fetchEligibleRestaurants = async (
  offset = 0,
) => {
  const results = await fetch(FETCH_ELIGIBLE_RESTAURANTS_URL, {
    method: 'POST',
    body: JSON.stringify({ ...USER_GAME_SETTINGS, offset }),
    headers: { 'Content-type': 'application/json' },
  });

  const content = await results.json();

  return {
    type: FETCH_ELIGIBLE_RESTAURANTS,
    payload: content,
  }
}