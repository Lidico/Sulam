import React, { Component } from 'react';
import './form.css';



function Miktzua(props) {
      
        return(
            <div className="profBox">
                <div className="profLine">שיעור {props.profName} עם {props.shemToar} {props.fName} {props.sName }</div><br/>
                <div className="profLine">בין השעות 14:00-15:00 כל יום {props.dayOfMifgash}'</div>
            </div>
        )
    }

export default Miktzua;