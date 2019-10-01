
import React, { Component } from 'react';
import './teacherDet.css';




function Teach(props) {
      
        return(
            <button className="blockPic" name="sulamTeacher" onClick={props.onChangeTeach}>
                <img className="profImageStud" src={props.imgUrl}/>
                <span className="tab">{props.shemToar} {props.fName} {props.sName}</span>
            </button>
        )
    }

export default Teach;
