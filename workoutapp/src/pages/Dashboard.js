import React, {Component} from "react";
import axios from "axios";
import Carousel from "../components/Carousel"
import Nav from "../components/Nav";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            plan: "",
            date: new Date()
        }
    }

    componentDidMount(){
        axios.get(`/api/days/${this.props.id}`).then(res=>{
            this.setState({plan: res.data});
        })
    }

    render() {
        let date = this.state.date
        let day = new Intl.DateTimeFormat('en-US', {weekday:"long"}).format(date)
        let month = new Intl.DateTimeFormat('en-US', {month:"long"}).format(date)
        let currentWorkout="Loading..."
        let plan = this.state.plan

        if(plan.length>0) {
            plan.forEach(dayPlan => {
                if(dayPlan.weekDay === day) {
                    currentWorkout=dayPlan.dayName
                }
            });
        }

        return (
            <div className="dashboard">
                <Nav/>
                <div>
                    <h1>{`Today is ${day}, ${month} ${date.getDate()}, ${date.getFullYear()}.`}</h1>
                    <h1>{currentWorkout}</h1>
                </div>
                <Carousel plan={this.state.plan}/>
            </div>
        )
    }
}