import React from 'react';
import i1 from '../images/sun_cloudy_icon.png';
// import i2 from '../images/TO_waterfront.jpg';

const Title = ()=>(
    <div>
        <h1 className = "title-container__title">Weather App</h1>
        <div className = "iconDiv">
             <img src={i1} alt="Weather Icon" className = "icon" id="i1"></img>
             {/* <img src ={i2} alt = "Weather Icon" className = "icon" id="i2"></img> */}
        </div>       
    </div>
);

export default Title; 