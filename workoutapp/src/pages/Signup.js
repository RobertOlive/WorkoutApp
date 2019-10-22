import React, {Component} from "react";
import axios from "axios";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordConf: "",
            email: ""
        };
    }

    signUpSubmit = () => {
        if (this.state.password === this.state.passwordConf) {
            axios.post("/registerUser", {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }).then((res)=>{
                console.log(res);
                this.props.loginHandle(this.state.username);
                this.props.history.push('/');
            })
        }
    }

    handleForm = e => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="login landing">
                <div>
                    <h1>Sign up</h1>
                </div>
                <form>
                    <input name="username" placeholder="username" onChange={this.handleForm} value={this.state.username}/>
                    <input name="email" placeholder="email" onChange={this.handleForm} value={this.state.email}/>
                    <input name="password" type="password" placeholder="password" onChange={this.handleForm} value={this.state.password}/>
                    <input name="passwordConf" type="password" placeholder="confirm password" onChange={this.handleForm} value={this.state.passwordConf}/>
                </form>
                <button onClick={this.signUpSubmit}>Click here to Sign Up</button>
            </div>
        )
    }
}