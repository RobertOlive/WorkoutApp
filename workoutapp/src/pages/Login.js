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

    componentDidMount() {
        if (localStorage.getItem('userId')) {
          console.log("hi")
          this.props.loginHandle(localStorage.getItem('userId'))
          this.props.history.push('/');
        }
    }

    loginSubmit = () => {
        const accessString = localStorage.getItem('JWT');
        if (this.state.username.length>0 && this.state.password.length>0) {
            axios.post("/loginUser", {
                username: this.state.username,
                password: this.state.password,
            },{headers: { Authorization: `JWT ${accessString}` }}).then((res)=>{
                console.log(res);
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('JWT', res.data.token);
                this.props.loginHandle(res.data.userId);
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