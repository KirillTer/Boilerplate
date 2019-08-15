import {connect} from "react-redux";
import { getFemaleWeatherSelector } from "../../../store/selectors";
import FemaleView from "./Female.view";


const mapStateToProps = (state) => {
  return {
    weather: getFemaleWeatherSelector(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FemaleView);
