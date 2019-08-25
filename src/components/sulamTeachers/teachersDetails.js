import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './teacherDet.css';
import TrachProfPic from './teachPic.jpg';
import firebase from '../../FireBase/FireStore';

class TeachersDeatails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '54235',
            phoneNumberEdit: false,
            Email: 'shamirIsTheMan@gmail.com',
            EmailEdit: false,
            address: 'בית ראש הממשלה 22 ירושלים',
            addressEdit: false,
            birthDate: new Date(),
            birthDateEdit: false,
            vetekInSulam: 'שנה',
            vetekInSulamEdit: false,
            program: 'מוגברת',
            programEdit: false,
            schoolContact: 'ברוריה',
            schoolContactEdit: false,

            gishaLeMahshev: 'לא',
            gishaLeMahshevEdit: false

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
      }

handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}
handleChangebirthDate(e) {
    this.setState({birthDate: e});
  }
handleEdit(e) {
    this.setState({[e.target.name]: true});
    console.log(this.state.birthDateEdit)
}
handleSave(e) {
    this.setState({[e.target.name]: false});  
}
render(){
    console.log(firebase.auth().currentUser);    
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox"><span className="headerTextPrimary">פרופ' כתריאל בארי</span></div>
                    <img src={TrachProfPic} alt="" className="profImage"></img>
                </div>
            </div>
           <div className="detailsBlock">

           </div>
        </div>

        )
    }
}

export default TeachersDeatails;