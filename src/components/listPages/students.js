import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const students = (props) => {
    let studentsList = [];
    studentsList = props.studentList;
    return (
        <div lassName="project-list section listBlock">
        <h5 className="headline">בחר תלמיד</h5>
        {studentsList.map((object, index) => {
            if(object.school === props.school && object.kita === props.grade && object.program === props.program){
            if(object.StudentiD === props.student.StudentiD)
                return(<button name="student"  key={index} value={index} onClick={props.onChangeStu} className="buttonListChecked">{object.fName} {object.sName}</button>);
            else
                return (<button name="student" key={index} value={index} onClick={props.onChangeStu} className="buttonList">{object.fName} {object.sName}</button>);
            }
        })}
      </div>
    );
}

export default students;