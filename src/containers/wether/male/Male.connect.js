import {connect} from "react-redux";
import { getMaleWeatherSelector } from "../../../store/selectors";
import MaleView from "./Male.view";


const mapStateToProps = (state) => {
  return {
    weather: getMaleWeatherSelector(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MaleView);
