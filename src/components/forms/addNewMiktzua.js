import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import MiktzuaSelector from './miktzuaSelector';


function TheacherSelector(props) {
    let teachersList = [];
    teachersList = props.teachers;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="sulamTeacher" dir="rtl">
        {teachersList.map((object, SulamTeacherID) => {
          return (
            <option key={SulamTeacherID} value={object.SulamTeacherID}>
              {object.fName+" "+object.sName}
            </option>
          );
        })}
      </select>
    );
  }
  

function MiktzuaList(props){
    return (
        <div>
            <h6>רשימת מקצועות</h6>

            {props.list.map(element => {
                return(
                    <div>
                <h6>{element.profName}</h6>
                </div>
                );
            })}
        </div>
    )
}

class AddNewMiktzua extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            StudentiD: props.location.state.StudentiD,
            profName:'',
            sulamTeacher:'',
            sulamTeacherIsSelected: true,
            dayOfMifgash:'',
            hourOfMifgash:'',
            techerProfList:[],
            schoolTeacherName:'',
            schoolTeacherPhone:'',
            studInTeacherHome:'',
            teachersList:[],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChangeHourOfMifgash = this.handleChangeHourOfMifgash.bind(this);
      }

      handleChangeHourOfMifgash(e) {
        let currentComponent=this;
       let timeHour =  e.getHours()+":"+e.getMinutes()
       currentComponent.setState({hourOfMifgash:timeHour});
     }
     
     
      handleChange(e) {
        let currentComponent = this;
        currentComponent.setState({[e.target.name]: e.target.value});
        if(e.target.id != "yabadabado"){
            this.setState({sulamTeacherIsSelected: false})  
        }
      }


      handleAdd(e) {
          let temp={
            profName:this.state.profName,
            sulamTeacher:this.state.sulamTeacher,
            dayOfMifgash:this.state.dayOfMifgash,
            hourOfMifgash:this.state.hourOfMifgash,
            studInTeacherHome:this.state.studInTeacherHome,
            schoolTeacherName:this.state.schoolTeacherName,
            schoolTeacherPhone:this.state.schoolTeacherPhone
           
        }
         console.log(this.state.profName);
          let arrTemp = this.state.MiktzuaList;
          arrTemp.push(temp);
          this.setState({MiktzuaList:arrTemp});
      }

      componentDidMount() {
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfTeachers").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ teachersList: arrTemp });
        });
        }

      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});
        console.log(this.state.sulamTeacher);
        db.collection("listOfStudents").doc(this.state.StudentiD).update({
            
            listOfmiktzout:this.state.MiktzuaList   
        }).then(() => alert("save")); 
      }


    render(){
    
        return(
        <div className="formPage">
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוספת מקצוע חדש</h4><br/><br/><br/>
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
                        {this.state.sulamTeacherIsSelected?
                        (
                            <select className="browser-default" dir="rtl" name="profName" value={this.state.profName} onChange={this.handleChange}>
                                <option value="english"> </option>
                            </select>
                        ):
                        (
                           <MiktzuaSelector profName={this.state.profName} teachID={this.state.sulamTeacher}  onChange={this.handleChange}
                           />
                           
                        )
                        }
                        
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר יום מפגש: </span>
                        <select className="browser-default" dir="rtl" name="kita"value={this.state.value} onChange={this.handleChange}>
                        <option value="sun">א'</option>
                        <option value="mon">ב'</option>
                        <option value="tus">ג'</option>
                        <option value="wed">ד' </option>
                        <option value="thr">ה' </option>
                        <option value="fri">ו' </option>
                    </select>
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> בחר שעת המפגש: </span>
                    <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="hh:mm aa"
                        timeCaption="Time"
                        selected={this.state.hourOfMifgash}
                        onChange={this.handleChangeHourOfMifgash}
                    />
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
                            <input name="gishaLeMahshev" type="radio" value="לא"/>
                            <span>לא</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input name="gishaLeMahshev" type="radio" value="כן"/>
                            <span>כן</span>
                        </label>
                        </p>
                    </label>
                    </div>
                </form>
                <div className="courseButtons">
                    <button type="submit" form="mikzua" className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    <button className="grey darken-3 waves-effect waves-light btn-large" onClick={this.handleAdd}>הוסף</button><br/><br/>
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