import React, { Component } from 'react';


class Inputcomponent extends Component {
    constructor(props){
        super(props);
        this.state={
            city:" "
        }
    }
    render() {
        return (
            <div>
                <input placeholder="enter city here" name="city" onChange={(e)=> this.setState({city : e.target.value})}></input>
                
                <button onClick={()=>this.props.Weather(this.state.city)}>Click</button>
                <br/>
                <br/>
                <h1>{this.props.city}</h1><h3>{this.props.state}</h3>
                <br/>

            </div>
        );
    }
}

export default Inputcomponent;
