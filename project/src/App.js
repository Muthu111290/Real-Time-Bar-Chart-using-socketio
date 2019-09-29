import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import price from './componetns/price';
import chart from './componetns/chart';


/*The <Route> component is the main part of React Router. Anywhere that you want to only render content based on the location’s pathname, you should use a <Route> element. */

/* The Route component expects a path prop, which is a string that describes the pathname that the route matches */

/* The <Switch> will iterate over routes and only render the first one that matches the current pathname */

class App extends Component {
  render() {
    return (
      <div className="App">
        
         <Router> 
           <Switch>
        
          <Route exact path="/" component={price} />
          <Route exact path="/chart" component={chart} />
          
        </Switch>
         </Router>
      </div>
    );
  }
}

export default App;
