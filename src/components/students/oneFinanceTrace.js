
import React, { Component } from 'react';
import './mainCard.css';


const OneFinanceTrace = (props) => {
           let dateOfMifgash = props.dateOfTrace.toDate().getDate()+"/"+(props.dateOfTrace.toDate().getMonth()+1)+"/"+props.dateOfTrace.toDate().getFullYear();

            let brithness = {
                backgroundColor: ''
            };
                if(props.index%2==0){
                    brithness.backgroundColor = '#C4C4C4';
                }
      
        return(
            <div className="FinanceTraceBox" style={brithness}>
                <span className="tab">{dateOfMifgash}</span><span className="tab">{props.progName}</span><span className="tab">{props.shemToar} {props.fName} {props.sName}</span><span className="tab">{props.isGetPaid?"שולם":"לא שולם"}</span><span  className="tab">{props.isGetPaid?props.progCost:"0"}</span>
            </div>
     )
 
}

export default OneFinanceTrace;