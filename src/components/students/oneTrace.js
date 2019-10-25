
import React, { Component } from 'react';
import './mainCard.css';


const OneTrace = (props) => {
       // const date = props.dateOfTrace.toDate()
        //const dateOfMifgash = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
       
        return(
            <div className="traceBox">
            <span className="dateAndTeacher">{} {props.shemToar} {props.fName} {props.sName }</span><br/><span className="contentPD desc">{props.description}</span>
            <div className="btnDel"><button className="deep-orange waves-effect waves-light btn" onClick={props.onRemove} value={props.index}>מחיקה</button></div>
             <div className="checkBOxes">
                 <p>
                 <label>
                     <input type="checkbox" name="isntArived" value={props.index} checked={props.isntArived} onClick={props.handleChangeCheckBox} />
                     <span>לא הגיע לשיעור</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" name="isLate" value={props.index} checked={props.isLate} onClick={props.handleChangeCheckBox} />
                     <span>איחר</span>
                 </label>
                 </p>
                 <p>
                 <label>
                     <input type="checkbox" name="isGetPaid" value={props.index} checked={props.isGetPaid} onClick={props.handleChangeCheckBox} />
                     <span>קיבל תלוש</span>
                 </label>
                 </p>
             </div>
         </div>
     )
 
}

export default OneTrace;
