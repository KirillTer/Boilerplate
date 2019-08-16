import {connect} from "react-redux";
import { getAdminMainSelector } from "../../store/selectors";
import AdminView from "./Admin.view";


const mapStateToProps = (state) => {
  return {
    admin: getAdminMainSelector(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
