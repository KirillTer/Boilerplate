import {connect} from "react-redux";
import { loadWeather } from '../../store/actions/'
import WeatherView from "./Weather.view";


const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadWeather: () => dispatch(loadWeather()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);
