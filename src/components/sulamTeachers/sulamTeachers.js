import React, { Component } from 'react';
import './teacherDet.css';
import firebase from '../../FireBase/FireStore';    
import Teach from './teach';
import { firestore } from 'firebase-admin';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


class SulamTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sulamTeacherList:[],
            sulamTeacher:"",
            theacherSelected:false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
      componentDidMount() {
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfTeachers").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ sulamTeacherList: arrTemp });
        });
      }

handleChange(e) {
    this.setState({sulamTeacher: this.state.sulamTeacherList[e.target.title], theacherSelected:true});
}


handleEdit(e) {
}
handleSave(e) {
}

render(){
 
    let ListTeacher =  this.state.sulamTeacherList.map((ListOfTeachers,index) =><Link to = {"TeachersDeatails/" + ListOfTeachers.SulamTeacherID} > <button name="sulamTeacher" key={index} onClick={this.handleChange} title={index} ><Teach id={ListOfTeachers.SulamTeacherID} imgUrl={ListOfTeachers.imgUrl} shemToar = {ListOfTeachers.shemToar} fName = {ListOfTeachers.fName} sName = {ListOfTeachers.sName}/></button></Link>)
    if(ListTeacher.length==0){
        ListTeacher = <span className="headLinePD">אין מורים במאגר.</span>;
    }
        return(
        <div className="mainBlockCard">
            <div className="detailsBlock">
            <h4>רשימת מורי סולם לעתיד:</h4><br/>
                <div className="nameAndPhototo">
                    {ListTeacher}
                </div>
            </div>
        </div>

        )
    }
}

export default SulamTeachers;