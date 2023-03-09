import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
