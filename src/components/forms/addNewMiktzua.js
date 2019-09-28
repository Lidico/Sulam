import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import MiktzuaSelector from './miktzuaSelector'; 
import MiktzuaList from './miktzuaList';
import { Redirect } from 'react-router';
import { stat } from 'fs';
import CheckAuth from '../auth/checkAuth';


function TheacherSelector(props) {
    let teachersList = [];
    teachersList = props.teachers;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="sulamTeacher" dir="rtl">
        {teachersList.map((object, SulamTeacherID) => {
          return (
            <option key={SulamTeacherID} value={object.SulamTeacherID}>
              {object.shemToar+" "+object.fName+" "+object.sName}
            </option>
          );
        })}
      </select>
    );
  }
  

class AddNewMiktzua extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            StudentiD: props.location.state.StudentiD,
            profName:'',
            sulamTeacher: "",
            sulamTeacherIsExist: false,
            dayOfMifgash:'א',
            hourOfMifgash:'',
            teachIMG:'',
            numOfShaot: 1,
            schoolTeacherName:'',
            schoolTeacherPhone:'',
            studInTeacherHome:'לא',
            MiktzuutList:[],
            teachersList:[],
            shemToar:"",
            fName:"",
            sName:"",
            isSubmit: false,
            isChangeTeacher: false
        };
    
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChangeHourOfMifgash = this.handleChangeHourOfMifgash.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

      handleChangeHourOfMifgash(e) {
        this.setState({hourOfMifgash:e});
     }
     
     
      handleChange(e) {
        const currentComponent = this;
        currentComponent.setState({[e.target.name]: e.target.value});
        if(e.target.name == "sulamTeacher"){
            const db = firebase.firestore();
                const ref = db.collection("listOfTeachers").doc(e.target.value);
                ref.get().then(doc => {
                    if (doc.exists) {
                         const teachShemToar = doc.data().shemToar;
                         const teachFName = doc.data().fName;
                         const teachSName  = doc.data().sName;
                         const teachImg  = doc.data().imgUrl;

                         this.setState({isChangeTeacher: true,
                            shemToar: teachShemToar,
                            fName: teachFName,
                            sName: teachSName,
                            teachIMG: teachImg
                        })  
                    } else {
                        console.log("No such document!");
                    }
                }).catch(error => {
                    console.log("Error getting document:", error);
                });
        }
      }

      handleAdd(e) {
        if(!this.state.profName) {
            return;
        }
        const db = firebase.firestore();

        let temp={
            profName:this.state.profName,
            shemToar:this.state.shemToar,
            fName:this.state.fName,
            sName:this.state.sName,
            techIMG:this.state.teachIMG,
            dayOfMifgash:this.state.dayOfMifgash,
            hourOfMifgash:this.state.hourOfMifgash,
            numOfShaot:this.state.numOfShaot,
            studInTeacherHome:this.state.studInTeacherHome,
            schoolTeacherName:this.state.schoolTeacherName,
            schoolTeacherPhone:this.state.schoolTeacherPhone,
            listOfGrades:[]   
        }
        let arrTemp = this.state.MiktzuutList;
        arrTemp.push(temp);
        this.setState({MiktzuutList:arrTemp});
        e.preventDefault();
        db.settings({});
        db.collection("listOfTeachers").doc(this.state.sulamTeacher).update({
            sulamTeacherStudentList: firebase.firestore.FieldValue.arrayUnion(this.state.StudentiD) 
        }); 
 
      }

      componentDidMount() {
        let currentComponent = this;
        let firstTeach;
        const db = firebase.firestore();
        let arrTemp = [];
        db.collection("listOfTeachers").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({
                 teachersList: arrTemp
            });
        });
        
        db.collection("listOfTeachers")
        .limit(1)
        .get()
        .then(querySnapshot => {
            if (!querySnapshot.empty) {
                const queryDocumentSnapshot = querySnapshot.docs[0];
                let teachID = queryDocumentSnapshot.data().SulamTeacherID;
                let teachShemToar = queryDocumentSnapshot.data().shemToar;
                let teachFName = queryDocumentSnapshot.data().fName;
                let teachSName  = queryDocumentSnapshot.data().sName;
                let teachIMAGE = queryDocumentSnapshot.data().imgUrl;
                this.setState({
                    sulamTeacher: teachID,
                    shemToar: teachShemToar,
                    fName: teachFName,
                    sName: teachSName,
                    teachIMG: teachIMAGE,
                    sulamTeacherIsExist: true
               });
            } else {
                console.log("No document corresponding to the query!");
                return null;
            }
        });
    }


      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({});
        db.collection("listOfStudents").doc(this.state.StudentiD).update({
            listOfmiktzout:this.state.MiktzuutList   
        }); 
        this.setState({isSubmit:true})
      }

      handleRemove(e) {
    }


    render(){
    
        return(
        <div className="formPage">
            <CheckAuth/>
            <div align="right" className="formBox">
                <div align="left" className="miktzuutCont">
                <MiktzuaList profs={this.state.MiktzuutList} onRemove={this.handleRemove}/>
                </div>
                <div align="right" className="formCont">
                <div className="inpBox">
                <h4 className="rightHeb">הוספת מקצוע חדש</h4><br/><br/><br/>
                </div>
                    <form onSubmit={this.handleSubmit} id="mikzua">
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מורה סולם לעתיד: </span>
                        <TheacherSelector
                        id = "teachers"
                        value={this.state.sulamTeacher}
                        func={this.handleChange}
                        teachers={this.state.teachersList}
                    />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מקצוע: </span>
                         {this.state.sulamTeacherIsExist?( 
                        <MiktzuaSelector profName={this.state.profName} teachID={this.state.sulamTeacher}  onChange={this.handleChange}/>
                         ):
                         (
                             <div></div>
                         )}
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר יום מפגש: </span>
                        <select className="browser-default" dir="rtl" name="dayOfMifgash" value={this.state.value} onChange={this.handleChange}>
                        <option value="א">א'</option>
                        <option value="ב">ב'</option>
                        <option value="ג">ג'</option>
                        <option value="ד">ד' </option>
                        <option value="ה">ה' </option>
                        <option value="ו">ו' </option>
                    </select>
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <DatePicker
                        dir = "rtl"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="hh:mm aa"
                        timeCaption="Time"
                        selected={this.state.hourOfMifgash}
                        onChange={this.handleChangeHourOfMifgash}
                    />
                <span dir="rtl" className="headLinePD"> בחר שעת המפגש: </span>
                   
                    </label>
                </div>

                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> מס' השעות בשבוע: </span>
                        <select className="browser-default" dir="rtl" name="numOfShaot" value={this.state.value} onChange={this.handleChange}>
                        <option value="1">שעה</option>
                        <option value="2">שעתיים</option>
                        <option value="3">שלוש שעות</option>
                    </select>
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> מורה מלמד בביה"ס: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="schoolTeacherName"
                                placeholder="הכנס שם מלא"
                                value={this.state.schoolTeacherName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="schoolTeacherPhone"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.schoolTeacherPhone}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                    <label>
                    <span dir="rtl"  className="headLinePD"> לומד בבית המורה: </span><br/>
                    <p>
                        <label>
                            <input name="studInTeacherHome" checked={this.state.studInTeacherHome === 'לא'} onChange={this.handleChange} type="radio" value="לא"/>
                            <span>לא</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input name="studInTeacherHome" checked={this.state.studInTeacherHome === 'לא'} onChange={this.handleChange} type="radio" value="כן"/>
                            <span>כן</span>
                        </label>
                        </p>
                    </label>
                    </div>
                </form>
                <div className="courseButtons">
                    <button type="submit" form="mikzua" className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    <button className="grey darken-3 waves-effect waves-light btn-large" onClick={this.handleAdd}>הוסף</button><br/><br/>
                    {this.state.isSubmit ? (<Redirect to={{pathname: "/Dashboard"}} ></Redirect>):null}
                </div>
                </div>
                <div className="newClassesBox">

                </div>
            </div>
        </div>

        )
    }
}
    

export default AddNewMiktzua;