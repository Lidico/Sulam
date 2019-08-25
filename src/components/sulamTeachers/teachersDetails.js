import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './teacherDet.css';
import TrachProfPic from './teachPic.jpg';

class TeachersDeatails extends Component {
        render(){
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox"><span className="headerTextPrimary">ד"ר כתריאל בארי</span></div>
                    <img src={TrachProfPic} alt="" className="profImage"></img>
                </div>
            </div>
           <div className=""></div>
        </div>

        )
    }
}

export default TeachersDeatails;