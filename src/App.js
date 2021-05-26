import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <div class="nav-container">
        <div class="nav">
          <a href="/"><h4>Home</h4></a>
          <a href="/contact"><h4>Contact</h4></a>
        </div>
      </div>
      <Router>
        <Switch>
          <Route key={"11111"} exact path="/">
            <div className="App">
              <Content />
            </div>
          </Route>
          <Route key={"33333"} exact path="/contact">
            <Contact/>
          </Route>
          <Route key={"22222"} exact path="/detail/:shortname" render={(props)=>{ return <Detail {...props}/>}}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
