import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";

import Landing from "./components/sections/landing";
import Order from "./components/sections/order";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/menu" component={Order} />
      <Redirect to="/" />
    </Switch>
  );
  return <Box>{routes}</Box>;
};

export default withRouter(App);
