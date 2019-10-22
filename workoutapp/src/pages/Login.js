import React, {Component} from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <input type="email" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                </form>
            </div>
        )
    }
}