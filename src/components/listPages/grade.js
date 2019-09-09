import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const grade = (props) => {

    let gradeList = [];
    gradeList = props.gradeList;
    return (
        <div lassName="project-list section listBlock">
        <h5 className="headline">בחר כיתה</h5>
        {gradeList.map((object, index) => {
            if(object === props.grade)
                return(<button name="grade"  value={object} onClick={props.onChange} className="buttonListChecked">{object}</button>);
            else
                return (<button name="grade" value={object} onClick={props.onChange} className="buttonList">{object}</button>);
        })}
      </div>
    );
}


export default grade;