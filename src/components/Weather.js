import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div className = "weather__info">
                {this.props.error && <p className = "weather__key">{this.props.error}</p>}
                {this.props.city &&<h2 className = "weather__key">{this.props.city}, {this.props.country}</h2>}
                {this.props.city &&<h1 className = "weather__key">Weather: <span>{this.props.descr}</span></h1>}
                
                {this.props.temp &&<p className = "weather__key">Temperature <span>{this.props.temp} &deg;{this.props.unit}</span>
                    {/* <br></br>
                    <span>{this.props.descr}</span> */}
                </p>}
                {this.props.humidex && <p className = "weather__key">Humidex <span>{this.props.humidex}</span></p>}                                         
            </div>

        );
    }
}

export default Weather;