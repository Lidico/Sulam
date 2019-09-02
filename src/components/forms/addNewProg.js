import React, { Component } from 'react';
import './form.css';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';

class AddNewProg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progName:"",
            cost:"",
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

        db.collection("listOfProgs").doc(this.state.progName).set({
            progName:this.state.progName,
            cost:this.state.cost,
        }).then(() => this.setState({isSubmit:true})); 
      }


    render(){
    
        return(
        <div className="formPage">
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוסף תוכנית חדשה</h4><br/><br/><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> שם התוכנית: </span>
                            <input
                                value={this.state.value}
                                onChange={this.handleChange}
                                required
                                dir="rtl"
                                type="text"
                                name="progName"
                                placeholder="הכנס שם התוכנית"
                            />
                    </label>
                </div>
                <div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> עלות השובר הניתן לתלמיד: </span>
                            <input
                                value={this.state.value} 
                                onChange={this.handleChange}
                                required
                                dir="rtl"
                                type="text"
                                name="cost"
                                placeholder="הכנס עלות"
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
    

export default AddNewProg;