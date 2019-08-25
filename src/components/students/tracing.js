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
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
            <OneTrace/>
        </div>
         <div className="addNewTrace">
         <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מורה מדווח: </span>
                        <select className="browser-default" dir="rtl" name="sulamTeacher" >
                        <option value="stop">יונתן סטופ</option>
                        <option value="chops">צ'ופס לוי</option>
                        <option value="catri">כתריאל בארי</option>
                        <option value="bella">בלה צ'ארלס</option>
                        <option value="arth">ארתור פינשטיין</option>
                    </select>
                    </label>
                </div>
            <div dir="rtl" className="datePic">
               <DatePicker
                    dateFormat="dd/MM/yyyy"
                    placeholderText="מלא תאריך"
                    dir="rtl"
            /> 

            </div>
            <label>
                    <textarea
                      rows="4"
                      cols="50"
                      required
                      dir="rtl"
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