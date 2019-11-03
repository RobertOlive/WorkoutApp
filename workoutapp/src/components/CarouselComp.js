import React, {Component} from "react";

export default class CarouselComp extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props)
        return (
            <div className="carouselComp">
                {this.props.children}
            </div>
        )
    }
}