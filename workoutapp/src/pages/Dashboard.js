import React, {Component} from "react";
import axios from "axios";
import MainContainer from "../components/MainContainer"
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

    loopThroughPlan = (currentDay)=> {
        let plan = this.state.plan
        if(plan.length>0) {
            console.log("plan updated")
            plan.forEach(day => {
                console.log(day)
                if(day.weekDay == currentDay) {
                    console.log(day.dayName)
                    return (<h1>{day.dayName}</h1>)
                }
            });
        } else {
            console.log("plan empty")
        }
    }

    render() {
        let date = this.state.date
        let day = new Intl.DateTimeFormat('en-US', {weekday:"long"}).format(date)
        let month = new Intl.DateTimeFormat('en-US', {month:"long"}).format(date)

        return (
            <div className="dashboard">
                <Nav/>
                <div>
                    <h1>{`Today is ${day}, ${month} ${date.getDate()}, ${date.getFullYear()}.`}</h1>
                    {this.state.plan.length>0? this.loopThroughPlan(day):""}
                </div>
                <MainContainer/>
            </div>
        )
    }
}