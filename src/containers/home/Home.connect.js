import {connect} from "react-redux";
import { getMainSelector } from '../../store/selectors'

import HomeView from "./Home.view";

const mapStateToProps = (state) => {
  return {
    mainData: getMainSelector(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
