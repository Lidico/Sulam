import React from 'react';
import { Link } from 'react-router-dom'


const navList = () => {
    return(
        <div lassName="project-list section listBlock">
            <div className="navListBox"> 
                <Link to="/">
                    <button className="buttonNav">פרטים אישיים</button>
                </Link>
                <Link to="/">
                    <button className="buttonNav">מצב משפחתי</button>
                </Link>
                <Link to="/">
                    <button className="buttonNav">מצב אקדמי</button>
                </Link>
                <Link to="/">
                    <button className="buttonNav">מעקב שבועי</button>
                </Link>
            </div>
         </div>
    )
}

export default navList;