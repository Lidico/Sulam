import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

class AddNewMiktzua extends Component {
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
                    <h4 className="rightHeb">הוספת מקצוע חדש</h4><br/><br/><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מקצוע: </span>
                        <select className="browser-default" dir="rtl" name="kita"value={this.state.value} onChange={this.handleChange}>
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
                        <select className="browser-default" dir="rtl" name="kita"value={this.state.value} onChange={this.handleChange}>
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
                <span dir="rtl" className="headLinePD"> מורה מלמד בביה"ס: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="fName"
                                placeholder="הכנס שם מלא"
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
                                name="fName"
                                placeholder="הכנס מס' טלפון"
                            />
                    </label>
                </div>
                <div className="courseButtons">
                    <button className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    <button className="grey darken-3 waves-effect waves-light btn-large">הוסף</button><br/><br/>
                </div>
                </form>
                </div>
                <div className="try">sda
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewMiktzua;