import { combineReducers } from 'redux';
import { homeReducer } from './home.reducer';

export const rootReducer = combineReducers({
  home: homeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;