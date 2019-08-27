import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainView from "./main-page/Main.connect";
import AuthView from "./auth/Auth.connect";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
    margin: 10
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Paper className={classes.root}>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/auth"/>
          )}/>
          <Route path="/main" component={MainView} />
          <Route path="/auth" component={AuthView} />
        </Switch>
      </Paper>
      <Footer />
    </>
  );
};

export default Layout;
