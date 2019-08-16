import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Admin from '../admin/Admin.connect'
import Auth from '../auth/Auth.connect'

const MainView = ({loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    <Switch>
      <Route path={match.path + "/admin"} component={Admin} />
      <Route path={match.path + "/auth"} component={Auth} />
    </Switch>
    </>
  );
};

export default MainView;
