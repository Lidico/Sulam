import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

class AddNewStud extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
      }

      setGender(event) {
        console.log(event.target.value);
      }


    render(){
    
        return(
        <div className="formPage">
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
                            />
                    </label>
                </div>
                  <div name="program" dir="rtl" class="input-field col s12">
                        <select>
                        <option value="" disabled selected>בחר תוכנית</option>
                        <option value="regila">רגילה</option>
                        <option value="mugberet">מוגברת</option>
                        </select>
                        <label>בחר תוכנית</label>
                    </div>

                            
                <div className="inpBox">
                                    <label>
                                    <span dir="rtl"  className="headLinePD">  גישה למחשב: </span><br/>
                                    <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" checked />
                                            <span>לא</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" />
                                            <span>כן</span>
                                        </label>
                                        </p>
                                </label>
                            </div>
                    <h5 className="rightHeb">פרטים אקדמים:</h5><br/><br/>
                    <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר בית ספר: </span>
                    <select name="school" value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">זיו</option>
                        <option value="lime">הגמנסיה העברית</option>
                    </select>
                    </label>
                 </div>
                 <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר כיתה: </span>
                    <select name="kita"value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">ט'</option>
                        <option value="lime">י'</option>
                        <option value="grape">י"א</option>
                        <option value="mir">י"ב</option>
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
                                name="name"
                                placeholder="הכנס שם המחנכ\ת"
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
                                name="name"
                                placeholder="הכנס מס' טלפון"
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
                                name="name"
                                placeholder="הכנס שם מלא"
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
                                name="name"
                                placeholder="הכנס מס' טלפון"
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
                                name="name"
                                placeholder="הכנס שם מלא"
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
                                name="name"
                                placeholder="הכנס מס' טלפון"
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
                                name="name"
                                placeholder="הכנס מס' אחים"
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
                      name="description"
                      placeholder="מלא את הדיווח השבועי"
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
                      name="description"
                      placeholder="מלא את הדיווח השבועי"
                    />
                    </label>
                </div>
                <button className="grey darken-3 waves-effect waves-light btn-large">המשך</button><br/><br/>
                </form>
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewStud;