
import React, { Component } from 'react';
import './teacherDet.css';
import TrachProfPic from './teachPic.jpg';



function StudOfTeach(props) {
      
        return(
            <div>
                <img className="profImageStud" src={TrachProfPic}/>
                <span>{props.shemToar} {props.fName} {props.sName}</span>
            </div>
        )
    }

export default StudOfTeach;





