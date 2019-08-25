import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import firebase from '../../FireBase/FireStore';


const NewClass =() => {
    return(
        <div className="newClassBox">
            <h5>אנגלית</h5>
            <div className="lineClass">
                 <span className="headLinePD">מורה סולם לעתיד:</span><span className="contentPD">צ'ופס לוי</span>
            </div>
            <div className="lineClass">
                <span className="headLinePD">מורה בביה"ס:</span><span className="contentPD">חגי ישורון</span>
            </div>
            <div className="lineClass">
                 <span className="headLinePD">טלפון:</span><span className="contentPD">058-666555445</span>
            </div>
            <div className="lineClass">
                 <span className="headLinePD">יום לימוד בשבוע:</span><span className="contentPD">ד'</span>
            </div>
            <div className="lineClass">
                 <span className="headLinePD">שעת המפגש:</span><span className="contentPD">14:00</span>
            </div>
            <div className="lineClass">
                <span className="headLinePD">לומד בבית המורה:</span><span className="contentPD">לא</span>
            </div>
            <div className="deletButt">
                    <button className="deep-orange waves-effect waves-light btn">מחק</button>
                </div>
        </div>


    )
}

export default NewClass;