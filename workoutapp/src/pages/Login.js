import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    loginSubmit = () => {
            axios.post("/loginUser", {
                username: this.state.username,
                password: this.state.password,
            }).then((res)=>{
                localStorage.setItem('JWT', res.data.token);
                this.props.loginHandle(this.state.username);
                this.props.history.push('/');
            })
    }

    handleForm = e => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="login landing">
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <input name="username" placeholder="username" onChange={this.handleForm} value={this.state.username}/>
                    <input type="password" name="password" placeholder="password" onChange={this.handleForm} value={this.state.password}/>
                </form>
                <button onClick={this.loginSubmit}>Click here to log in</button>
                <Link to="/signup">New User? Sign up here.</Link>
            </div>
        )
    }
}