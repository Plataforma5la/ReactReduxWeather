const apiKey = '95176c8edea30e33338e0eaddd53a916';

export const REQUEST_CITY_WEATHER = 'REQUEST_CITY_WEATHER';

export function requestWeather() {
  return {
    type: REQUEST_CITY_WEATHER,
  };
}

export const RECEIVE_CITY_WEATHER = 'RECEIVE_CITY_WEATHER';

export function receiveWeather(query, data) {
  return {
    type: RECEIVE_CITY_WEATHER,
    data,
    query,
  };
}

export const REMOVE_CITY_WEATHER = 'REMOVE_CITY_WEATHER';

export function removeCity(index) {
  return {
    type: REMOVE_CITY_WEATHER,
    index,
  };
}

export function fetchWeather(query) {
  return (dispatch) => {
    dispatch(requestWeather());
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiKey}&units=metric`,
      {
        headers: new Headers({
          Accept: 'application/javascript',
        }),
      })
      .then(response => response.json())
      .then(data => dispatch(receiveWeather(query, data)));
  };
}
