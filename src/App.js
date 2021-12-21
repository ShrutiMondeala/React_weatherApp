import logo from './logo.svg';
import './App2.css';
import { Component } from 'react';
import Inputcomponent from './Components/inputComponent';
import Diplay from './Components/diplay';
import inputComponent from './Components/inputComponent';

const API_KEY="9836bf07e26bf9797ced5045c135583f";

class App extends Component{
constructor(){
  super();
  this.state={
    city:undefined,
    state:undefined,
    icon:undefined,
    temp:undefined,
    temp_min:undefined,
    temp_max:undefined,
    temp_state:undefined,
    icon:undefined
  }
    this.getWeather=this.getWeather.bind(this);
    this.caltemp=this.caltemp.bind(this);
    
    this.getWeather();
    this.weathericon={
      Thunderstrom:"fa-bolt",
      Sunny:"fa fa-sun",
      Rain:"fa fa-cloud-showers-heavy",
      Drizzel:"fas fa-cloud-rain",
      Snow:"fas fa-cloud-meatball",
      Cloud:"fas fa-cloud",
      Mist:"fas fa-cloud-sun"
    }
}

get_weathericon(icon,iconId){
    switch(true){
      case iconId==800 :
        this.setState({
          icon: this.weathericon.Sunny
        });
        break;
      case iconId>=200 && iconId<=232 :
        this.setState({
          icon: this.weathericon.Thunderstrom
        });
        break;
        case iconId>=300 && iconId<=321 :
        this.setState({
          icon: this.weathericon.Drizzel
        });
        break;
        case iconId>=500 && iconId<=531 :
        this.setState({
          icon: this.weathericon.Rain
        });
        break;
        case iconId>=801 && iconId<=804 :
        this.setState({
          icon: this.weathericon.Cloud
        });
        break;
        case iconId>=701 && iconId<=781 :
        this.setState({
          icon: this.weathericon.Mist
        });
        break;
    }
}
caltemp(temp){
  return Math.floor(temp-273.15);
}


async getWeather(e){

  const city=e;
  if(city){
  const Api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const response= await Api.json();
  console.log(response);
  console.log(response.weather[0].id);
  this.setState({
    city: response.name,
    state: response.sys.country,
    temp: this.caltemp(response.main.temp),
    temp_min:this.caltemp(response.main.temp_min),
    temp_max:this.caltemp(response.main.temp_max),
    temp_state:response.weather[0].description
  })
  this.get_weathericon(this.weathericon,response.weather[0].id)
}
else{
  const Api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Amritsar&appid=${API_KEY}`);
  const response= await Api.json();
  console.log(response);
  console.log(response.weather[0].id);
  this.setState({
    city: response.name,
    state: response.sys.country,
    temp: this.caltemp(response.main.temp),
    temp_min:this.caltemp(response.main.temp_min),
    temp_max:this.caltemp(response.main.temp_max),
    temp_state:response.weather[0].description
  })
  this.get_weathericon(this.weathericon,response.weather[0].id)
}
}
  render(){
  return (
    <div className="App">
        <div className='weatherApp'>
             <Inputcomponent city={this.state.city} state={this.state.state} Weather={this.getWeather}/>
              <br/>
              <Diplay 
              icon={this.state.icon} 
              temp={this.state.temp}
              temp_min={this.state.temp_min}
              temp_max={this.state.temp_max}
              temp_state={this.state.temp_state}/>
        </div>
    </div>
  )}

}

export default App;
