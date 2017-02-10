import { REQUEST_CITY_WEATHER, RECEIVE_CITY_WEATHER, REMOVE_CITY_WEATHER } from 'Actions/weather';

export default function weather(state = {
  isFetching: false,
  cities: [],
}, action) {
  switch (action.type) {
    case REQUEST_CITY_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_CITY_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        receivedAt: Date.now(),
        cities: [...state.cities, {
          data: action.data,
          query: action.query,
        }],
      });
    case REMOVE_CITY_WEATHER:
      return Object.assign({}, state, {
        cities: [
          ...state.cities.slice(0, action.index),
          ...state.cities.slice(action.index + 1),
        ],
      });
    default:
      return state;
  }
}
