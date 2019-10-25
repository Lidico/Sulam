import React, { Component } from 'react';
import './mainCard.css';

import OneFinanceTrace from './oneFinanceTrace';


const AllFinanceTraces = (props) => {

    let justArivedTrace = props.traceList.filter(num => !num.isntArived);
    if(justArivedTrace.length==0){
        return <span className="headLinePD">לא קיימים דוחות עדיין</span>;
    }
        return(
        <div>
              {justArivedTrace.map((Trace,index) =>{
                return (
                <OneFinanceTrace index={index}  studentID={props.studentID} progName={props.programData.progName} progCost={props.programData.cost} isGetPaid={Trace.isGetPaid}  dateOfTrace={Trace.details.dateOfTrace} fName={Trace.details.fName} sName={Trace.details.sName} shemToar={Trace.details.shemToar} />
                );
                })} 
        </div>

        )
    }


export default AllFinanceTraces;