import React from 'react';

const Form = (props) =>(
    <div>
        Search a Destination
        <form onSubmit={props.getAllWeathData}>
            <input type="text" name="Country" placeholder="Country"></input>
            <input type="text" name="City" placeholder="City"></input>
            <label className="unitLabel">
                <input type="radio" id="metricUnit" name="Unit" value="metric" defaultChecked></input>
                <label htmlFor="metricUnit" className="Unit">Metric </label>
                <input type="radio" id="imperialUnit" name= "Unit" value="imperial"></input>
                <label htmlFor="imperialUnit" className="Unit">Imperial </label>
                {/* <span></span> */}
            </label>
            <br></br>
            <button type="submit">Search</button>
        </form>
    </div>
);

export default Form; 