import React, { Component } from 'react';
import Graph from './graph';
import ProffList from './proffList';
import firebase from '../../FireBase/FireStore';


class AcademyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            miktzuutList:props.student.listOfmiktzout,
            studentID: props.student.StudentiD,
            teacherName: props.student.teacherName,
            teacherNameEdit: false,
            teacherPhone: props.student.teacherPhone,
            teacherPhoneEdit: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
      }


handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}
handleChangebirthDate(e) {
    this.setState({birthDate: e});
  }
  handleEdit(e) {
    this.setState({[e.target.name]: true});
}
handleSave(e) {
    this.setState({[e.target.name]: false}); 
    const db = firebase.firestore();
    db.collection("listOfStudents").doc(this.state.studentID).update({
        [e.target.title]: e.target.slot
    });
}
render(){

    return(
     <div>
         <Graph mikztuut={this.state.miktzuutList} />
         <div className="personalDataBox">
            {this.state.teacherNameEdit ? 
                    (<div className="inpBox">
                    <label>
                    <span dir="rtl"  className="headLinePD"> שם המחנכ\ת: </span>
                        <input
                            required
                            dir="rtl"
                            type="text"
                            name="teacherName"
                            placeholder="הכנס שם המחנכ\ת"
                            value = {this.state.teacherName}
                            onChange = {this.handleChange}
                        />
                        </label>
                        <button className="buttonEdit" name="teacherNameEdit" value={this.state.teacherNameEdit} title="teacherName" slot={this.state.teacherName} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                    :
                    ( <div> <span className="headLinePD">שם המחנכ\ת:</span><span className="contentPD">{this.state.teacherName}</span>
                <button className="buttonEdit" name="teacherNameEdit" value={this.state.teacherNameEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                {this.state.teacherPhoneEdit ? 
                    (<div className="inpBox">
                    <label>
                    <span dir="rtl"  className="headLinePD"> טלפון: </span>
                        <input
                            required
                            dir="rtl"
                            type="text"
                            name="teacherPhone"
                            placeholder="הכנס טלפון"
                            value = {this.state.teacherPhone}
                            onChange = {this.handleChange}
                        />
                        </label>
                        <button className="buttonEdit" name="teacherPhoneEdit" value={this.state.teacherPhoneEdit} title="teacherPhone" slot={this.state.teacherPhone} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                    :
                    ( <div> <span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.teacherPhone}</span>
                <button className="buttonEdit" name="teacherPhoneEdit" value={this.state.teacherPhoneEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
            </div><br/><br/>
        <ProffList mikztuut={this.state.miktzuutList} studentID={this.state.studentID}/>
    </div>
       
       )
    }
}

export default AcademyDetails;