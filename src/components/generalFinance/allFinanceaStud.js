import React, { Component } from 'react';
import './mainCard.css';


const AllFinanceaStud = (props) => {

    let justArivedTrace = props.traceList.filter(num => num.listOfTrace!=0);
    if(justArivedTrace.length==0){
        return <span className="headLinePD">לא קיימים דוחות עדיין</span>;
    }
        return(
        <div>
              {justArivedTrace.map((Trace,index) =>{
                return (
                <OneFinanceTrace index={index}  fName={Trace.fName} sName={Trace.sName}  progCost={props.programData.cost} isGetPaid={Trace.isGetPaid}  dateOfTrace={Trace.details.dateOfTrace} fName={Trace.details.fName} sName={Trace.details.sName} shemToar={Trace.details.shemToar} />
                );
                })} 
        </div>

        )
    }


export default AllFinanceaStud;