import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import CheckAuth from '../auth/checkAuth'

class AddNewStud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName:'',
            sName:'',
            StudentiD:'',
            gender: 'זכר',
            phoneNumber:'',
            Email:'',
            address:'',
            birthDate:new Date(),
            vetekInSulam:new Date(),
            program:'',
            gishaLeMahshev:'לא',
            school:'',
            kita:'',
            teacherName:'',
            teacherPhone:'',
            firstContactName:'',
            firstContPhoneNum:'',
            secondContactName:'',
            secondContPhoneNum:'',
            numOfbrothers:'',
            familyStatus:'',
            generalDescription:'',
            isSubmit: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
        this.handleChangevetekInSulam = this.handleChangevetekInSulam.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }
      handleChangevetekInSulam(e) {
        this.setState({vetekInSulam: e});
      }
      handleChangebirthDate(e) {
        this.setState({birthDate: e});
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});

        db.collection("listOfStudents").doc(this.state.StudentiD).set({
            fName:this.state.fName,
            sName:this.state.sName,
            StudentiD:this.state.StudentiD,
            gender:this.state.gender,
            phoneNumber:this.state.phoneNumber,
            Email:this.state.Email,
            address:this.state.address,
            birthDate:this.state.birthDate,
            vetekInSulam:this.state.vetekInSulam,
            program:this.state.program,
            gishaLeMahshev:this.state.gishaLeMahshev,
            school:this.state.school,
            kita:this.state.kita,
            teacherName:this.state.teacherName,
            teacherPhone:this.state.teacherPhone,
            firstContactName:this.state.firstContactName,
            firstContPhoneNum:this.state.firstContPhoneNum,
            secondContactName:this.state.secondContactName,
            secondContPhoneNum:this.state.secondContPhoneNum,
            numOfbrothers:this.state.numOfbrothers,
            familyStatus:this.state.familyStatus,
            generalDescription:this.state.generalDescription,
        }).then(() => this.setState({isSubmit:true})); 
      }
      

    render(){
        return(
        <div className="formPage">
            <CheckAuth/>
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוסף תלמיד חדש</h4><br/><br/><br/>
                    <h5 className="rightHeb">פרטים אישיים:</h5><br/>
                    <form onSubmit={this.handleSubmit}>
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
                                name="StudentiD"
                                placeholder="הכנס מס' תעודת זהות"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">

<label>
<span dir="rtl"  className="headLinePD"> מין: </span><br/>
<p>
    <label>
        <input name="gender" type="radio" checked={this.state.gender === 'זכר'} value='זכר' onChange={this.handleChange} />
        <span>זכר</span>
    </label>
    </p>
    <p>
    <label>
        <input name="gender" type="radio" checked={this.state.gender === 'נקבה'} value='נקבה' onChange={this.handleChange}/>
        <span>נקבה</span>
    </label>
    </p>
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
                        <span dir="rtl"  className="headLinePD"> כתובת: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="address"
                                placeholder="הכנס כתובת"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div dir="rtl" className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> תאריך לידה: </span>
                            <DatePicker
                                dateFormat="dd/mm/yyyy"
                                showYearDropdown
                                isClearable={true}
                                dir="rtl"
                                placeholderText="מלא תאריך לידה"
                                name="birthDate"
                                selected={this.state.birthDate}
                                onChange={this.handleChangebirthDate}
                            />
                    </label>
                </div>
                <div dir="rtl"  className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD">  תאריך כניסה לסולם לעתיד: </span>
                            <DatePicker
                                dateFormat="dd/mm/yyyy"
                                showYearDropdown
                                dir="rtl"
                                isClearable={true}
                                placeholderText="מלא תאריך כניסה"
                                name="vetekInSulam"
                                selected={this.state.vetekInSulam}
                                onChange={this.handleChangevetekInSulam}
                            />
                    </label>
                </div>
                <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר תוכנית: </span>
                    <select className="browser-default" name="program" value={this.state.program} onChange={this.handleChange}>
                        <option value="" disabled selected>בחר תוכנית</option>
                        <option value="רגילה">רגילה</option>
                        <option value="מוגברת">מוגברת</option>
                        </select>         
                    </label>
                 </div>
                 <div className="inpBox">

                                    <label>
                                    <span dir="rtl"  className="headLinePD">  גישה למחשב: </span><br/>
                                    <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" checked={this.state.gishaLeMahshev === 'לא'} value="לא" onChange={this.handleChange}/>
                                            <span>לא</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" checked={this.state.gishaLeMahshev === 'כן'} value="כן" onChange={this.handleChange} />
                                            <span>כן</span>
                                        </label>
                                        </p>
                                </label>
                            </div>
                    <h5 className="rightHeb">פרטים לימודיים:</h5><br/><br/>
                    <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר בית ספר: </span>
                    <select className="browser-default" name="school" value={this.state.school} onChange={this.handleChange}>
                        <option value="זיו">זיו</option>
                        <option value="הגמנסיה העברית">הגמנסיה העברית</option>
                    </select>
                    </label>
                 </div>
                 <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר כיתה: </span>
                    <select className="browser-default" dir="rtl" name="kita" value={this.state.kita} onChange={this.handleChange}>
                        <option value="ט">ט'</option>
                        <option value="י">י'</option>
                        <option value="יא">י"א</option>
                        <option value="יב">י"ב</option>
                    </select>
                    </label>
                 </div>
                 <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> שם המחנכ\ת: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="teacherName"
                                placeholder="הכנס שם המחנכ\ת"
                                value={this.state.teacherName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD">  טלפון: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="teacherPhone"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.teacherPhone}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <h5 className="rightHeb">מצב בבית:</h5><br/><br/>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD">  איש קשר: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="firstContactName"
                                placeholder="הכנס שם מלא"
                                value={this.state.firstContactName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD">  טלפון: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="firstContPhoneNum"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.firstContPhoneNum}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD">  איש קשר נוסף: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="secondContactName"
                                placeholder="הכנס שם מלא"
                                value={this.state.secondContactName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  טלפון: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="secondContPhoneNum"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.secondContPhoneNum}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מס' אחים: </span>
                        <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="numOfbrothers"
                                placeholder="הכנס מס' אחים"
                                value={this.state.numOfbrothers}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מצב כללי בבית: </span>
                        <textarea
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="familyStatus"
                      placeholder="מלא את הדיווח השבועי"
                      value={this.state.familyStatus}
                      onChange={this.handleChange}
                    />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מידע נוסף: </span>
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
                <button className="grey darken-3 waves-effect waves-light btn-large">המשך</button><br/><br/>
                </form>
                </div>
            </div>

            {this.state.isSubmit ? (<Redirect to={{pathname: "/AddNewMiktzua", state:{StudentiD:this.state.StudentiD}}} ></Redirect>):null}
        </div>

        )
    }
}
    

export default AddNewStud;