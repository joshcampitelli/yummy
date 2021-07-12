export const selectCurrentGameRestaurants = (state) => {
  console.log(state);
  return state['SWIPING_REDUCER'].restaurants
};