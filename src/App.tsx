import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomeSection";
import { About } from "./components/About";
import Facts from "./containers/Facts";
import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts";
import { Login } from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/panel" component={Panel} />
          <Route path="/voting" component={Voting} />
          <Route path="/about" component={Landing} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

function Landing() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Facts />
      <Contacts />
      <Footer />
    </div>
  );
}

function Panel() {
  return (
    <Redirect
      to={{
        pathname: "/login"
      }}
    />
  );
}
function Voting() {
  return <h2>Voting</h2>;
}

export default App;
