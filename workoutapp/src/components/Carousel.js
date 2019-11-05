import React, {Component} from "react";
import CarouselComp from "./CarouselComp";

export default class Carousel extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let plan = this.props.plan
        let dayName="Back Day"
        let weekDay="Monday"
        console.log(plan);
        return (
            <div className="carousel">
                <button className="addPlan" onClick={()=>{
                    this.props.addDayHandler(dayName, weekDay)
                }}>Add Workout Plan</button>
                {plan.length>0 ? plan.map(day=>{
                    return <CarouselComp key={day.dayName}>{day.dayName}</CarouselComp>
                }):<CarouselComp key="noPlan"></CarouselComp>}
            </div>
        )
    }
}