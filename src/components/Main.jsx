import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import Search from 'Comps/Search';
import CityWeather from 'Comps/CityWeather';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const middle = {
  width: '80%',
  margin: '0 auto',
};
const Main = function Main(props) {
  return (
    <div style={middle}>
      <Row type="flex" justify="space-around" align="middle">
        <Col>
          <h1>
            <Link to="/">React Weather</Link>
          </h1>
        </Col>
      </Row>
      <Row type="flex" justify="space-around" align="middle">
        <Search
          fetchWeather={props.fetchWeather}
          isLoading={props.isFetching}
        />
      </Row>
      <Row>
        <ReactCSSTransitionGroup
          transitionName="io"
          transitionAppear
          transitionLeave
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="div" className="ant-row-flex ant-row-flex-space-around"
        >
          { props.cities.map((cities, index) =>
            (
              <CityWeather
                index={index}
                weather={cities.data}
                key={cities.data.id}
                removeCity={props.removeCity}
              />
            ))
        }
        </ReactCSSTransitionGroup>
      </Row>
    </div>
  );
};

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
  cities: React.PropTypes.array.isRequired,
  fetchWeather: React.PropTypes.func.isRequired,
  removeCity: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

export default Main;
