import React, {Component} from 'react';
import './App.css';
import { BrowserRouter,Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends Component {
  state={
    user:""
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={()=>this.state.user.length>1?<Redirect to="/home"/>:<Redirect to="/login"/>}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
