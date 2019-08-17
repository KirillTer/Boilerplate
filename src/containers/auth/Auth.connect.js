import {connect} from "react-redux";
import { singInAction, singUpAction } from '../../store/actions'
import { getAuthMainSelector } from "../../store/selectors";
import AuthView from "./Auth.view";


const mapStateToProps = (state) => {
  return {
    auth: getAuthMainSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    singInAction: (email, password) => dispatch(singInAction(email, password)),
    singUpAction: (email, password) => dispatch(singUpAction(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
