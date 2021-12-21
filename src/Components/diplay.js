import React, { Component } from 'react';

class Diplay extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render() {
        return (
            <div>
                <h1>{<i className={`${this.props.icon} fa-3x`}></i>}</h1>
                <br/>
                <h3>{this.props.temp_state}</h3>
                <br/><br/><br/>
                Temprature
                <br/>
                {this.props.temp}&deg;
                <br/><br/><br/>
                Min Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max Temp
                <br/><br/>
                {this.props.temp_min}&deg;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {this.props.temp_max}&deg;
                
                
            </div>
        );
    }
}

export default Diplay;
