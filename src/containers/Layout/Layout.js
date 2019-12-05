import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Header from "./Header/Header.connect";
import MainView from "../main-page/Main.connect";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2rem',
    margin: '6rem auto',
    width: '80vw',

  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
        <Paper className={classes.root} m={1}>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/main/home"/>
            )}/>
            <Route path="/main" component={MainView} />
          </Switch>
        </Paper>
    </>
  );
};

export default Layout;
