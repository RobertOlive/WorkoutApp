import React, {Component} from "react";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        axios.get(`/api/days/${this.props.id}`).then(res=>{
            console.log(res.data);
        })

    }
    render() {
        return (
            <div className="dashboard">
                <div>
                    <h1>Hello</h1>
                </div>
            </div>
        )
    }
}