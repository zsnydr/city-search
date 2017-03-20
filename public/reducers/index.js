import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const activeCity = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_CITY':
      return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  routing: routerReducer,
  activeCity
});

export default rootReducer;
