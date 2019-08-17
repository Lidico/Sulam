
import React from 'react';
import { Link } from 'react-router-dom'
import './listPage.css';

const schools = () => {
    return(
    <div lassName="project-list section listBlock">
        <h4 className="headline">בחר בית ספר</h4>
        <Link to="/NewClass">
             <button className="buttonList">דנמרק</button>
             <button className="buttonListChecked">זיו</button>
             <button className="buttonList">מכללת אורט</button>
             <button className="buttonList">הגמנסיה העברית</button>
             <button className="buttonList">גבעת גונן</button>
        </Link>
    </div>

    )
}

export default schools;
