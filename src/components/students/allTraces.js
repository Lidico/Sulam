import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './mainCard.css';

import OneTrace from './oneTrace';


const AllTraces = (props) => {

  
    if(props.tracingList.length==0){
        return <span className="headLinePD">לא קיימים דוחות עדיין</span>;
    }
        return(
        <div >
              {props.tracingList.map((Trace,index) =>{
                  console.log(Trace);
                return (
                <OneTrace index={index} traceList={props.tracingList} dateOfTrace={Trace.details.dateOfTrace} fName={Trace.details.fName} sName={Trace.details.sName} shemToar={Trace.details.shemToar} description={Trace.details.description} isntArived={Trace.isntArived} isLate={Trace.isLate} isGetPaid={Trace.isGetPaid} studentID={props.studentID} onRemove={props.removeFunc} handleChangeCheckBox={props.handleChangeCheckBox}/>
                );
                })}
        </div>

        )
    }


export default AllTraces;