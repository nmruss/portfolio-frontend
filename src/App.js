import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route key={"11111"} exact path="/">
          <div className="App">
            <Home />
            <Content />
          </div>
        </Route>
        <Route key={"22222"} exact path="/:shortname" render={(props)=>{ return <Detail {...props}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;
