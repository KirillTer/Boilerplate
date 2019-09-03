import React from "react";
import clsx from 'clsx';
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainView from "./main-page/Main.connect";
import AuthView from "./auth/Auth.connect";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
    margin: 10
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  content: {
    marginTop: 74
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <>
      <Header onOpen={() => handleDrawerOpen()} onClose={() => handleDrawerClose()} open={open}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
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
      </main>
    </>
  );
};

export default Layout;
