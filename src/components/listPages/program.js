import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const program = () => {
    return(
    <div lassName="project-list section listBlock">
        <h4 className="headline">בחר תוכנית</h4>
        <Link to="/NewClass">
             <button className="buttonListChecked">רגילה</button>
             <button className="buttonList">מוגברת</button>

        </Link>
    </div>

    )
}

export default program;