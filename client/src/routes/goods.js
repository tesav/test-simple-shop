import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/goods/";

export default [
  <Route path="/goods/create" component={Create} exact key="create" />,
  <Route path="/goods/edit/:id" component={Update} exact key="update" />,
  <Route path="/goods/show/:id" component={Show} exact key="show" />,
  <Route path="/goods/" component={List} exact strict key="list" />,
  <Route path="/goods/:page" component={List} exact strict key="page" />,
];
