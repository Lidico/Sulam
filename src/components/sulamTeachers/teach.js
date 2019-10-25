
import React, { Component } from 'react';
import './teacherDet.css';




function Teach(props) {
      
        return(
            <div className="blockPic" name="sulamTeacher">
                <img className="profImageStud" src={props.imgUrl}/>
                <span className="tab">{props.shemToar} {props.fName} {props.sName}</span>
            </div>
        )
    }

export default Teach;
