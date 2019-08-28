
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import firebase from '../../FireBase/FireStore';



function StudOfTeach(props) {
      
        return(
            <div className="">
                <img src={props.stud.imgUrl}/>
                <span>{props.stud.fName}+" "+{props.stud.sName}</span>

            </div>
        )
    }

export default StudOfTeach;





