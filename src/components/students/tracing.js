import React from 'react';
import OneTrace from './oneTrace';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


const Tracing = () => {

    return(
        <div>
        <div className="tracingBox">
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
        </div>
         <div className="addNewTrace">
            <div className="datePic">
               <DatePicker
                    dateFormat="dd/MM/yyyy"
                    placeholderText="מלא תאריך"
            /> 

            </div>
            <label>
                    <textarea
                      rows="4"
                      cols="50"
                      required
                      name="description"
                      placeholder="מלא את הדיווח השבועי"
                    />
             </label>
          <Link to="/"><button className="grey darken-3 waves-effect waves-light btn-large">הוספת דיווח</button></Link>
        </div>
        </div>
    )
}

export default Tracing;