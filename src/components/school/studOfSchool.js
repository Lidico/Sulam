
import React, { Component } from 'react';
import './schools.css';



function StudOfSchool(props) {
      
        return(
            <div className="blockPic" name="studOfSchool">
                <img className="profImageStud" src={props.imgUrl}/>
                <span className="tab">{props.fName} {props.sName}</span>
            </div>
        )
    }

export default StudOfSchool;



