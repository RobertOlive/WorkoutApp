import React, {Component} from "react";
import axios from "axios";
export default class Login extends Component {

    doAThing() {
        axios.get("api/plans").then(res=>console.log(res));
    }

    render() {
        return (
            <div className="login landing">
                <div>
                    <h1>Sign up</h1>
                </div>
                <form>
                    <input type="email" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="confirm password"/>
                </form>
                <button onClick={this.doAThing}>Click here to do a thing</button>
            </div>
        )
    }
}