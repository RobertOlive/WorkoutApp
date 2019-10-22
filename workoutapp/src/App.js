import React, {Component} from 'react';
import './App.css';
import { BrowserRouter,Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  state={
    user:""
  }

  loginHandle=(user)=>{
    this.setState({user: user})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={()=>this.state.user.length>1?<Redirect to="/home"/>:<Redirect to="/login"/>}/>
            <Route exact path="/home" render={props=><Home {...props}/>}/>
            <Route exact path="/login" render={props=><Login loginHandle={this.loginHandle}{...props}/>}/>
            <Route exact path="/signup" render={props=><Signup loginHandle={this.loginHandle}{...props}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
