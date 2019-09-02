import React, { Component } from 'react';
import './form.css';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';

class AddNewSchool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName:"",
            schoolAdress:"",
            contactName:"",
            contactPhone:"",
            isSubmit: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      const db = firebase.firestore();

      db.settings({});

      db.collection("listOfSchools").doc(this.state.schoolName).set({
        schoolName:this.state.schoolName,
        schoolAdress:this.state.schoolAdress,
        contactName:this.state.contactName,
        contactPhone:this.state.contactPhone,
      }).then(() => this.setState({isSubmit:true})); 
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
                                value={this.state.value}
                                onChange={this.handleChange}
                                required
                                dir="rtl"
                                type="text"
                                name="schoolName"
                                placeholder="הכנס שם בית הספר"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> כתובת: </span>
                            <input
                                value={this.state.value}
                                onChange={this.handleChange} 
                                required
                                dir="rtl"
                                type="text"
                                name="schoolAdress"
                                placeholder="הכנס כתובת"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> שם איש הקשר בביה"ס: </span>
                            <input
                                 alue={this.state.value}
                                onChange={this.handleChange}                                 
                                required
                                dir="rtl"
                                type="text"
                                name="contactName"
                                placeholder="הכנס שם איש קשר"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                value={this.state.value}
                                onChange={this.handleChange}                                 
                                required
                                dir="rtl"
                                type="text"
                                name="contactPhone"
                                placeholder="הכנס מס' טלפון"
                            />
                    </label>
                </div>
                <button className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                {this.state.isSubmit ? (<Redirect to={{pathname: "/Dashboard"}} ></Redirect>):null}
                </form>
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewSchool;