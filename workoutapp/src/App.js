import React, {Component} from 'react';
import './App.css';
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      loggedIn: false
    }
  }

  loginHandle=(id)=>{
    this.setState({id: id, loggedIn:true})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/dashboard" render={props=>this.state.loggedIn?<Dashboard {...props} id={this.state.id}/>:<Redirect to="/login"/>}/>
            <Route exact path="/login" render={props=><Login loginHandle={this.loginHandle}{...props}/>}/>
            <Route exact path="/signup" render={props=><Signup loginHandle={this.loginHandle}{...props}/>}/>
            <Route render={()=>this.state.loggedIn?<Redirect to="/dashboard"/>:<Redirect to="/login"/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
