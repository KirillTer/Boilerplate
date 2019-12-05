import React from "react";
import { Switch } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Home from '../home/Home.connect'

const MainView = ({ match}) => {

  return (
    <Switch>
      <ProtectedRouter path={match.path + "/home"} component={Home} />
    </Switch>
  );
};

export default MainView;
