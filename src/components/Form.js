import React from 'react';

const Form = (props) =>(
    <div>
        <h2 className='formTitle'>Search a Destination</h2>
        <form onSubmit={props.getAllWeathData}>
            <div className='formFields'>
                <input type="text" name="Country" placeholder="Country"></input>
                <input type="text" name="City" placeholder="City"></input>
                <label className="unitLabel">
                    <div>
                        <input type="radio" id="metricUnit" name="Unit" value="metric" defaultChecked></input>
                        <label htmlFor="metricUnit" className="Unit">Metric </label>
                    </div>
                    <div>
                        <input type="radio" id="imperialUnit" name= "Unit" value="imperial"></input>
                        <label htmlFor="imperialUnit" className="Unit">Imperial </label> 
                    </div>
                {/* <span></span> */}
                </label>
            </div>
            <br></br>
            <button type="submit">Search</button>
        </form>
    </div>
);

export default Form; 