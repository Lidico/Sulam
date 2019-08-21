import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavList from './navList';
import './mainCard.css';
import profPic from './pic.jpg';
import PersonalDetails from './personalDetails';
import AcademicDetails from './academyDetails';
import FamilyDetails from './familyDetails';
import Tracing from './tracing';




class MainCard extends Component {
        render(){
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox"><span className="headerTextPrimary">יצחק שמיר</span><span className="headerTextSub">בית ספר: זיו ומרקוס  כיתה: ט'</span></div>
                    <img src={profPic} alt="" className="profImage"></img>
                </div>
            </div>
            <NavList/>
            <div className="dataBox">
                {/*<PersonalDetails/>*/}
                {/*<FamilyDetails/>*/}
                <Tracing/>
            </div>
        </div>

        )
    }
}

export default MainCard;