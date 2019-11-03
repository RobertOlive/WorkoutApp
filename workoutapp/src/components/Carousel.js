import React, {Component} from "react";
import CarouselComp from "./CarouselComp";

export default class Carousel extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let plan = this.props.plan
        console.log(plan);
        return (
            <div className="carousel">
                {plan.length>0 ? plan.map(day=>{
                    return <CarouselComp key={day.dayName}>{day.dayName}</CarouselComp>
                }):"Loading plan..."}
            </div>
        )
    }
}