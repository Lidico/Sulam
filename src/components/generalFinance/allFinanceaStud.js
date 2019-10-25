import React, { Component } from 'react';
import './mainCard.css';


const AllFinanceaStud = (props) => {

    let justArivedTrace = props.traceList.filter(num => (num.listOfTrace).length!=0);
    if(justArivedTrace.length==0){
        return;
    }
        return(
        <div>
              {justArivedTrace.traceList.map((Trace,index) =>{
                return (
                    Trace.traceList.filter(num => !num.isntArived).map((OneTrace,index)=>{
                        <OneFinanceGeneral key={index} fullName={Trace.fName+" "+Trace.sName} programList={props.programData} isGetPaid={OneTrace.isGetPaid}  dateOfTrace={OneTrace.details.dateOfTrace} fName={OneTrace.details.fName} sName={OneTrace.details.sName} shemToar={OneTrace.details.shemToar} />
                    })
                );
                })} 
        </div>

        )
    }


export default AllFinanceaStud;