import React, { Component } from 'react';
import './schools.css';
import firebase from '../../FireBase/FireStore';    
import StudOfSchool from './studOfSchool';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



class TeachersDeatails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: props.match.params.id,
            schoolAdress:"",
            schoolAdressEdit: false,
            contactName:"",
            contactNameEdit: false,
            contactPhone:"",
            contactPhoneEdit: false,
            allStudentList:[]

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
    
componentDidMount() {

    const currentComponent = this;
    const db = firebase.firestore();
    var docRef = db.collection("listOfSchools").doc(this.state.schoolName);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
             currentComponent.setState({
                schoolAdress: doc.data().schoolAdress,
                contactName: doc.data().contactName,
                contactPhone: doc.data().contactPhone
            }) 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); 

    db.collection("listOfStudents").where("school", "==", this.state.schoolName)
    .get()
    .then(function(querySnapshot) {
        let arrTemp = [];
        querySnapshot.forEach(function(doc) {
            arrTemp.push(doc.data());
        });
        currentComponent.setState({ allStudentList: arrTemp });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


}


handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}
handleEdit(e) {
    this.setState({[e.target.name]: true});
}
handleSave(e) {
    this.setState({[e.target.name]: false}); 
    const db = firebase.firestore();
    db.collection("listOfSchools").doc(this.state.schoolName).update({
        [e.target.title]: e.target.slot
    });
}

render(){

    let studentsListSchool =  this.state.allStudentList.map((listOfStudents,StudentiD) =><Link to = {"/MainCard/" + listOfStudents.StudentiD} ><button name="sulamTeacher" key={StudentiD} onClick={this.handleChange} title={StudentiD} ><StudOfSchool id={listOfStudents.StudentiD} imgUrl={listOfStudents.imgUrl}  fName = {listOfStudents.fName} sName = {listOfStudents.sName}/></button></Link>)
    if(studentsListSchool.length==0){
        studentsListSchool = <span className="headLinePD">לבית ספר זה אין אף תלמיד רשום</span>;
    }

   function profList(array){
        let newList = "";
        for(let i = 0; i<array.length ; i++){
           newList += array[i];
           if(i!=array.length-1){
               newList += ", ";
               continue;
           }
        }
        return newList;
       }
      
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox"><span className="headerTextPrimary">{this.state.schoolName}</span></div>
                </div>
            </div>
           <div className="detailsBlock">
           <h5>פרטי בית הספר</h5>

                {this.state.schoolAdressEdit ? 
                (<div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> כתובת בית הספר: </span>
                            <input
                                  
                                required
                                dir="rtl"
                                type="text"
                                name="schoolAdress"
                                placeholder= {this.state.schoolAdress}
                                value = {this.state.schoolAdress}
                                onChange={this.handleChange}
                            />
                    </label>
                    <button className="buttonEdit" name="schoolAdressEdit"  value={this.state.schoolAdressEdit} title="schoolAdress" slot={this.state.schoolAdress} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                :
                    (<div><span className="headLinePD">כתובת בית הספר:</span><span className="contentPD">{this.state.schoolAdress}</span>
                    <button className="buttonEdit" name="schoolAdressEdit"  value={this.state.schoolAdressEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                {this.state.contactNameEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> איש קשר בביה"ס: </span>
                    <input
                         
                        required
                        dir="rtl"
                        type="text"
                        name="contactName"
                        placeholder="הכנס שם מלא"
                        value={this.state.contactName}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="buttonEdit" name="contactNameEdit" value={this.state.contactNameEdit} title="contactName" slot={this.state.contactName} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">איש קשר בביה"ס:</span><span className="contentPD">{this.state.contactName}</span>
                <button className="buttonEdit" name="contactNameEdit" value={this.state.contactNameEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                {this.state.contactPhoneEdit ? 
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> טלפון: </span>
                    <input
                        
                        required
                        dir="rtl"
                        type="text"
                        name="contactPhone"
                        placeholder="הכנס טלפון"
                        value = {this.state.contactPhone}
                        onChange = {this.handleChange}
                    />
                    </label>
                    <button className="buttonEdit" name="contactPhoneEdit" value={this.state.contactPhoneEdit} title="contactPhone" slot={this.state.contactPhone} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.contactPhone}</span>
                    <button className="buttonEdit" name="contactPhoneEdit" value={this.state.contactPhoneEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                 <br/><hr className="borderLine"/><br/>
                  <h5>רשימת תלמידים</h5>
                  {studentsListSchool}

            </div>
        </div>

        )
    }
}

export default TeachersDeatails;