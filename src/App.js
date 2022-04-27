import React from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


class App extends React.Component{

  state = {
    country: undefined,
    city: undefined,
    temp: undefined,
    humidex: undefined,
    descr: undefined,
    error: undefined,
    unit: undefined
  }

  invalidLocation(){

    this.setState({
      country: undefined,
      city: undefined,
      temp: undefined,
      humidex: undefined,
      descr: undefined,
      error: "Location not recognised. Please re-enter in location details.",
      unit: undefined

    })

  }

  getAllWeathData = async(e) =>{
    e.preventDefault();
    var countryQ = e.target.elements.Country.value;
    const cityQ = e.target.elements.City.value;
    var unitQ=e.target.elements.Unit.value;

    //first check they are filled in form
    if(cityQ && countryQ){

      //england/uk not recognised by api
      //could hard code

      //check if valid country code
      var countryCode = await (await fetch (`https://restcountries.com/v2/alpha/${countryQ}`)).json();
      // console.log(countryCode);
        
      if(countryCode.status === 404 || countryCode.status === 400){
        //not recognised, check if valid country name
        const countryCheck = await (await fetch(`https://restcountries.com/v2/name/${countryQ}`)).json();
        // console.log(countryCheck);

        if(countryCheck.length === 1 && countryCheck.status !== 404 ){
          //api will produce suggestions based on name input, therefore check for single result, and check result
          //valid country name, switch to code
          //&& countryCheck[0].name === countryQ
            countryQ = countryCheck[0].alpha2Code;          

        }else{
          //not valid country name or code, send error message and do not pull info
          this.invalidLocation();
          return;
        }
      }else{
        //valid code but ensure alpha2 vs alpha3 iso code
        countryQ = countryCode.alpha2Code;
      }
      

      const weathData = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQ},${countryQ}&units=${unitQ}&APPID=cd95e8d91daaa698e0bf339b6aa6b508`)).json();
      // console.log(weathData); 
      if(weathData.cod ==="404"){
        this.invalidLocation();        
      }else{
        //user preference for units
        if (unitQ === "metric"){
          unitQ="C";
        }
        else{ unitQ="F";}

        //api call will still return if city is valid even if country code is invalid
        //could check to see if user queried country is the same as produced result

        this.setState({
          country: countryQ,
          city: cityQ,
          temp: weathData.main.temp,
          humidex: weathData.main.humidity,
          descr: weathData.weather[0].description,
          error: undefined,
          unit: unitQ
        })
      }      
    }else{
      this.setState({
        country: undefined,
        city: undefined,
        temp: undefined,
        humidex: undefined,
        descr: undefined,
        error: "Please Enter in Location Details",
        unit: undefined
      })
    }
    
  }

  render(){
    return(
      //single parent element in JSX
      <div className = "main">
        <div className = "title-container"><Title/></div>
        <div className ="form-container">
          <Form getAllWeathData={this.getAllWeathData}/>
          <Weather 
            country={this.state.country}
            city={this.state.city}
            temp={this.state.temp}
            humidex={this.state.humidex}
            descr={this.state.descr}
            error={this.state.error}
            unit= {this.state.unit}/>
        </div>
      </div>
    );
  }
}

export default App;
