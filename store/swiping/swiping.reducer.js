import { FETCH_ELIGIBLE_RESTAURANTS } from './swiping.types';

const initialState = {
  restaurants: [],
};

export const swipingReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_ELIGIBLE_RESTAURANTS:
      return {
        ...state,
        restaurants: state.restaurants.concat(action.payload),
      };
    default:
      return state;
  }
}