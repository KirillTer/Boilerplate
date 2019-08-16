import {connect} from "react-redux";
import { loadMain } from '../../store/actions'
import MainView from "./Main.view";


const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadMain: () => dispatch(loadMain()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
