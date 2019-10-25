
import React, { Component } from 'react';
import './teacherDet.css';



function StudOfTeach(props) {
      
        return(
            <div className="blockPic" name="studOfTeach">
                <img className="profImageStud" src={props.imgUrl}/>
                <span className="tab">{props.fName} {props.sName}</span>
            </div>
        )
    }

export default StudOfTeach;





