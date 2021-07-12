import { createStore, combineReducers } from 'redux';
import { swipingReducer } from './swiping/swiping.reducer';

const rootReducer = combineReducers({
  'SWIPING_REDUCER': swipingReducer,
});

export const yummyStore  = createStore(rootReducer);