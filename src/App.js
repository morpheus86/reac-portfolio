import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Navigation from "./stateless/Navigation";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
      <div>
        <Navigation />
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home" component={Home} key="home" />
              <Route exact path="/about" component={About} key="about" />
              <Route
                exact
                path="/portfolio"
                component={Portfolio}
                key="portfolio"
              />
              <Route
                exact
                path="/education"
                component={Education}
                key="education"
              />
              <Route
                exact
                path="/projects"
                component={Projects}
                key="projects"
              />
              <Route exact path="/skills" component={Skills} key="skills" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </div>
    )}
  />
);

export default App;
