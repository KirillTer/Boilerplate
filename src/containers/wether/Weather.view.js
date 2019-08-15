import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Male from './male/Male.connect'
import Female from './female/Female.connect'

const WeatherView = ({loadWeather, match}) => {

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

  return (
    <>
    <Switch>
      <Route path={match.path + "/male"} component={Male} />
      <Route path={match.path + "/female"} component={Female} />
    </Switch>
    </>
  );
};

export default WeatherView;
