import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Create, List, Show, Update} from "./components/catalog";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={List} exact strict key="list" />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
