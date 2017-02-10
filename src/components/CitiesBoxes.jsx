import React from 'react';
import CityWeather from 'Comps/CityWeather';

export default function CitiesBoxes(props) {
  return  props.cities.map((cities, index) =>
            (
              <CityWeather
                index={index}
                weather={cities.data}
                key={cities.data.id}
                removeCity={props.removeCity}
              />
          ));
}
