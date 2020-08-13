import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Main";
import Footer from "./Components/Footer/Footer.js";
import IPhone from "./Components/Pages/IPhone";
import Mac from "./Components/Pages/Mac";
import Products from "./Components/Pages/Products";
import NotFound from "./Components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/iphone" exact component={IPhone} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone/:pid" exact component={Products} />
            <Route path="/:other" component={NotFound} />
            <Main />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
