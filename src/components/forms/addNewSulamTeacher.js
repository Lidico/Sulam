import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class AddNewSulamTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName:'',
            sName:'',
            SulamTeacherID:'',
            phoneNumber:'',
            Email:'',
            address:'',
            generalDescription:'',
            TeacherMiktzuaList: new Array(),
            isSubmit: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        if(e.target.type == "checkbox"){
            if(this.state.TeacherMiktzuaList.Contains(e.target.value)){
                this.state.TeacherMiktzuaList.remove(e.target.value);
            }
            else{
                this.state.TeacherMiktzuaList.push(e.target.value);
            }
        }
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});

        db.collection("listOfTeachers").doc(this.state.SulamTeacherID).set({
            fName:this.state.fName,
            sName:this.state.sName,
            SulamTeacherID:this.state.SulamTeacherID,
            phoneNumber:this.state.phoneNumber,
            Email:this.state.Email,
            address:this.state.address,
            generalDescription:this.state.generalDescription,
        }).then(() => this.setState({isSubmit:true})); 
      }

    render(){
    
        return(
        <div className="formPage">
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוספת מורה חדש</h4><br/><br/><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר שם תואר: </span>
                        <select className="browser-default" dir="rtl" name="kita"value={this.state.value} onChange={this.handleChange}>
                        <option value="english">מר\גברת</option>
                        <option value="math">ד"ר</option>
                        <option value="history">פרופסור</option>
                    </select>
                    </label>
                </div>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> שם פרטי: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="fName"
                                placeholder="הכנס שם פרטי"
                                dir="rtl"
                                value={this.state.fName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> שם משפחה: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="sName"
                                placeholder="הכנס שם משפחה"
                                value={this.state.sName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' ת"ז: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="SulamTeacherID"
                                placeholder="הכנס מס' תעודת זהות"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> כתובת: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="address"
                                placeholder="הכנס כתובת"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="phoneNumber"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> דוא"ל: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="Email"
                                placeholder="הכנס דוא''ל"
                                value={this.state.Email}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מקצועות לימוד: </span>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="מתמטיקה" onChange={this.handleChange} />
                                <span>מתמטיקה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="ספרות" onChange={this.handleChange}/>
                                <span>ספרות</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="פיזיקה" onChange={this.handleChange} />
                                <span>פיזיקה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="היסטוריה" onChange={this.handleChange} />
                                <span>היסטוריה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="אזרחות" onChange={this.handleChange} />
                                <span>אזרחות</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="אנגלית" onChange={this.handleChange} />
                                <span>אנגלית</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="תנך" onChange={this.handleChange} />
                                <span>תנ"ך</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="לשון" onChange={this.handleChange} />
                                <span>לשון</span>
                            </label>
                        </p>
                    </label>
                </div>

                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מידע כללי על המורה: </span>
                        <textarea
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="generalDescription"
                      placeholder="מלא את הדיווח השבועי"
                      value={this.state.generalDescription}
                      onChange={this.handleChange}
                    />
                    </label>
                </div>
                
                <div className="courseButtons">
                    <button className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    {this.state.isSubmit ? (<Redirect to={{pathname: "/Dashboard", state:{SulamTeacherID:this.state.SulamTeacherID}}} ></Redirect>):null}

                </div>
                </form>
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewSulamTeacher;