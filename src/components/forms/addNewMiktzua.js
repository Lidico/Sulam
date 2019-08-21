import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import firebase from '../../FireBase/FireStore';

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
            schoolTeacherName:'',
            schoolTeacherPhone:'',
            MiktzuaList: new Array()
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }
      handleAdd(e) {
          let temp={
            profName:this.state.profName,
            sulamTeacher:this.state.sulamTeacher,
            schoolTeacherName:this.state.schoolTeacherName,
            schoolTeacherPhone:this.state.schoolTeacherPhone
          }
          let arrTemp = this.state.MiktzuaList;
          arrTemp.push(temp);
          this.setState({MiktzuaList:arrTemp});

      }

      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});

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
                        <span dir="rtl" className="headLinePD"> בחר מקצוע: </span>
                        <select className="browser-default" dir="rtl" name="profName" value={this.state.profName} onChange={this.handleChange}>
                        <option value="english">אנגלית</option>
                        <option value="math">מתמטיקה</option>
                        <option value="history">היסטוריה</option>
                        <option value="Literature">ספרות</option>
                        <option value="bible">תנ"ך</option>
                        <option value="phisic">פיזיקה</option>
                    </select>
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מורה סולם לעתיד: </span>
                        <select className="browser-default" dir="rtl" name="sulamTeacher" value={this.state.sulamTeacher} onChange={this.handleChange}>
                        <option value="stop">יונתן סטופ</option>
                        <option value="chops">צ'ופס לוי</option>
                        <option value="catri">כתריאל בארי</option>
                        <option value="bella">בלה צ'ארלס</option>
                        <option value="arth">ארתור פינשטיין</option>
                    </select>
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> מורה מלמד בביה"ס: </span>
                            <input
                                className="inputB"
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
                                className="inputB"
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
                </form>
                <div className="courseButtons">
                    <button type="submit" form="mikzua" className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    <button className="grey darken-3 waves-effect waves-light btn-large" onClick={this.handleAdd}>הוסף</button><br/><br/>
                </div>
                </div>
                <MiktzuaList list={this.state.MiktzuaList}/>
            </div>
        </div>

        )
    }
}
    

export default AddNewMiktzua;