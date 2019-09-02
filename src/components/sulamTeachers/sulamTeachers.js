import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './teacherDet.css';
import firebase from '../../FireBase/FireStore';    
import DatePicker, { registerLocale } from 'react-datepicker';
import StudOfTeach from './studOfTeach';
import { firestore } from 'firebase-admin';


class SulamTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sulamTeacherList:[]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
      componentDidMount() {
        const db = firebase.firestore();
        db.collection("listOfTeachers").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            this.setState({ sulamTeacherList: arrTemp });
        });
      }

handleChange(e) {
}

handleEdit(e) {
}
handleSave(e) {
}

render(){
 
    let ListTeacher =  this.state.sulamTeacherList.map((ListOfTeachers,SulamTeacherID) =><StudOfTeach key={SulamTeacherID} fName = {SulamTeacherID.fName} sName = {SulamTeacherID.sName} img = {SulamTeacherID.imgUrl}/>)
    if(ListTeacher.length==0){
        ListTeacher = <span className="headLinePD">אין מורים במאגר.</span>;
    }
    console.log(this.state.sulamTeacherList);
        return(
        <div className="mainBlockCard">
            <div className="detailsBlock">
                {ListTeacher}
            </div>
        </div>

        )
    }
}

export default SulamTeachers;