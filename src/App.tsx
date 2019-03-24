import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomeSection";
import { About } from "./components/About";
import Facts from "./containers/Facts";
import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/panel" component={Panel} />
          <Route path="/voting" component={Voting} />
          <Route path="/voting-widget" component={VotingWidget} />
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
function Login() {
  return <h2>Login</h2>;
}
function Panel() {
  return <h2>Panel</h2>;
}
function Voting() {
  return <h2>Voting</h2>;
}
function VotingWidget() {
  return <h2>VotingWidhet</h2>;
}

export default App;
