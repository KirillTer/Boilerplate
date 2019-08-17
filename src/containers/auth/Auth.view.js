import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import SingIn from './SingIn.form'
import SingUp from './SingUp.form'

const AuthView = ({auth, match}) => {

  const handleSingIn = values => {
    console.log('Handle Sing In', values);
  }

  const handleSingUp = values => {
    console.log('Handle Sing In', values);
  }

  return (
    <>
      <h2>Auth page</h2>
      <NavLink to={match.path + "/singin"}>Sing In</NavLink>
      <NavLink to={match.path + "/singup"}>Sing Up</NavLink>
      <Switch>
        <Route path={match.path + "/singin"} render={() => (<SingIn onSubmit={handleSingIn}/>)}/>
        <Route path={match.path + "/singup"} render={() => (<SingUp onSubmit={handleSingUp}/>)}/>
      </Switch>
    </>
  );
};

export default AuthView;