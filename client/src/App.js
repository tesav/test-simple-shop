import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {List as CatalogList} from "./components/catalog";
import {List as GoodsList, Show as ShowProduct} from "./components/goods";
import Nav from './layouts/Nav'
import Header from "./layouts/Header";
import Section from "./layouts/Section";
import Footer from "./layouts/Footer";

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Header/>
      <Section>
        <Switch>
          <Route path="/" component={GoodsList} exact strict key="GoodsList"/>
          <Route path="/category/:id" component={GoodsList} strict key="CategoryGoodsList"/>
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </Section>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
