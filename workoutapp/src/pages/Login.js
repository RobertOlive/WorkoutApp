import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="login landing">
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <input type="email" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                </form>
                <Link to="/signup">New User? Sign up here.</Link>
            </div>
        )
    }
}