import { combineReducers } from 'redux';

import weather from 'Reducers/weather';

const rootReducer = combineReducers({ weather });

export default rootReducer;
