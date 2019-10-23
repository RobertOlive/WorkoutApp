import React, {Component} from 'react';
import './App.css';
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  state={
    user:"",
    loggedIn: false
  }

  loginHandle=(user)=>{
    this.setState({user: user, loggedIn:true})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={()=>this.state.loggedIn?<Redirect to="/dashboard"/>:<Redirect to="/login"/>}/>
            <Route exact path="/dashboard" render={props=><Dashboard {...props}/>}/>
            <Route exact path="/login" render={props=><Login loginHandle={this.loginHandle}{...props}/>}/>
            <Route exact path="/signup" render={props=><Signup loginHandle={this.loginHandle}{...props}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
