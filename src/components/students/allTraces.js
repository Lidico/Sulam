import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './mainCard.css';
import firebase from '../../FireBase/FireStore';    
import { firestore } from 'firebase-admin';
import OneTrace from './oneTrace';


class AllTraces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            traceList: props.tracingList
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }


handleChange(e) {
}


handleRemove(e) {
}

render(){
 
    let ListTrace =  this.state.traceList.map((Trace,TraceKey) =><OneTrace key={TraceKey} dateOfTrace={Trace.details.dateOfTrace} fName={Trace.details.fName} sName={Trace.details.sName} shemToar={Trace.details.shemToar} description={Trace.details.description} isntArived={Trace.isntArived} isLate={Trace.isLate} isPaid={Trace.isPaid} onRemove={Trace.onRemove}/>)
    if(ListTrace.length==0){
        ListTrace = <span className="headLinePD"></span>;
    }
        return(
        <div >
              {ListTrace}
        </div>

        )
    }
}

export default AllTraces;