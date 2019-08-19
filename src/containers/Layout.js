import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "../components/Navigation";
import MainView from "./main-page/Main.connect";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => (
            <Redirect to="/main/auth"/>
        )}/>
        <Route path="/main" component={MainView} />
      </Switch>
    </>
  );
};

export default Layout;
