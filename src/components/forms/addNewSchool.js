import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

class AddNewSchool extends Component {
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
                    <h4 className="rightHeb">הוסף בית ספר חדש</h4><br/><br/><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> שם בית הספר: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="fName"
                                placeholder="הכנס שם בית הספר"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> כתובת: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="fName"
                                placeholder="הכנס כתובת"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> שם איש הקשר בביה"ס: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="fName"
                                placeholder="הכנס שם איש קשר"
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
                <button className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                </form>
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewSchool;