import React, { Component } from 'react';
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import './listPage.css';

const Schools = (props) => {

    let schoolList = [];
    schoolList = props.schoolList;
    return (
        <div lassName="project-list section listBlock">
        <h5 className="headline">בחר בית ספר</h5>
        {schoolList.map((object, index) => {
            if(object.schoolName === props.school)
                return(<button name="school" key={index} value={object.schoolName} onClick={props.onChange} className="buttonListChecked">{object.schoolName}</button>);
            else
                return (<button name="school" key={index} value={object.schoolName} onClick={props.onChange} className="buttonList">{object.schoolName}</button>);
        })}
      </div>
    );
}
    

export default Schools;



