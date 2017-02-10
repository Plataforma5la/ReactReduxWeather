import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsCreators from 'Actions/weather';
import Main from 'Comps/Main';

function mapStateToProps(state) {
  return {
    isFetching: state.weather.isFetching,
    cities: state.weather.cities,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
