import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/catalog/";

export default [
  <Route path="/catalogs/create" component={Create} exact key="create" />,
  <Route path="/catalogs/edit/:id" component={Update} exact key="update" />,
  <Route path="/catalogs/show/:id" component={Show} exact key="show" />,
  <Route path="/catalogs/" component={List} exact strict key="list" />,
  <Route path="/catalogs/:page" component={List} exact strict key="page" />,
];
