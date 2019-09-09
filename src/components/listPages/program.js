import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const program = (props) => {

    let programList = [];
    programList = props.programList;
    return (
        <div lassName="project-list section listBlock">
        <h4 className="headline">בחר תוכנית</h4>
        {programList.map((object, index) => {
            if(object === props.program)
                return(<button name="program"  value={object} onClick={props.onChange} className="buttonListChecked">{object}</button>);
            else
                return (<button name="program" value={object} onClick={props.onChange} className="buttonList">{object}</button>);
        })}
      </div>
    );
}

export default program;