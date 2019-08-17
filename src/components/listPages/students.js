import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const students = () => {
    return(
    <div lassName="project-list section listBlock">
        <h4 className="headline">בחר תלמיד</h4>
        <Link to="/NewClass">
             <button className="buttonList">אופק אהרון</button>
             <button className="buttonList">אליה בדורי</button>
             <button className="buttonList">באדי יעקוב</button>
        </Link>
    </div>

    )
}

export default students;