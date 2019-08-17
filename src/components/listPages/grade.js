import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const grade = () => {
    return(
    <div lassName="project-list section listBlock">
        <h4 className="headline">בחר כיתה</h4>
        <Link to="/NewClass">
             <button className="buttonListChecked">ט'</button>
             <button className="buttonList">י"א</button>
             <button className="buttonList">י"ב</button>

        </Link>
    </div>

    )
}

export default grade;