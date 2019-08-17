import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
import Search from './search';

const Buttons = () => {
    return(
        <div className="project-list section center-align">
             <div className="section">
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3">הוספת תלמיד</button>
                </Link>
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3">פרטי התלמיד</button>
                </Link>
            </div>
                <div className="section">
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3" disabled>הוספת מורה</button>
                </Link>
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3">פרטי המורים</button>
                </Link>
            </div>
            <div className="section">
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3" disabled>הוספת בית ספר</button>
                </Link>
                <Link to="/">
                    <button className="waves-effect waves-light btn-large m3">פרטי בתי הספר</button>
                </Link>
            </div>
            <div className="section">
                <Search/>
            </div>


        </div>
    )
}

export default Buttons;