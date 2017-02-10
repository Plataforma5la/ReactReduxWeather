import React from 'react';
import { Card, Icon, Col } from 'antd';

const float = { float: 'right' };

export default function CityWeather(props) {
  const index = props.index;
  function handleClose() {
    props.removeCity(index);
  }
  const w = props.weather;
  const extra = (
    <Icon
      type="close"
      onClick={handleClose}
      style={{ cursor: 'pointer' }}
    />
  );
  return (
    <Col id={props.index} span={6} style={{ padding: "15px" }}>
      <Card title={w.name} extra={extra} style={{ height: 200 }}>
        <img
          style={float}
          alt="Icon"
          src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`}
        />
        <p><strong>Temperatura: </strong>{w.main.temp}°</p>
        <p><strong>Humedad: </strong>{w.main.humidity}%</p>
        <p><strong>Vientos: </strong>{w.wind.speed}m/s</p>
        <p><strong>Vientos (dirección): </strong>{w.wind.deg} °</p>
        <p><strong>Presión: </strong>{w.main.pressure} hPa</p>
      </Card>
    </Col>
  );
}

CityWeather.propTypes = {
  weather: React.PropTypes.object,
  index: React.PropTypes.number,
  removeCity: React.PropTypes.func,
};
