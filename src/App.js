import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import MainView from "./components/MainView";
import Projects from "./components/Projects";
import MyNavbar from "./components/layout/MyNavbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/portfolio" component={MainView} />
          <Route exact path="/portfolio/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
