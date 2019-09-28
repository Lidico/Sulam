import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
import Search from './search';


const Buttons = (props) => {
    return(
        <div className="buttBox">
             <div className="buttLine">
                {props.manager ? <div className="buttLine"><Link to="/AddNewProg">
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף תוכנית חדשה</button>
                </Link>
                <Link to="/AddNewSchool">
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף ביה"ס חדש</button>
                </Link>
                </div>
                :
                <div className="buttLine">
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף תוכנית חדשה</button>
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף ביה"ס חדש</button>
                </div>
                }
                
                <Link to="/AddNewSulamTeacher">
                   <button className="grey darken-3 waves-effect waves-light btn-large" >הוסף מורה חדש</button>
                </Link>
                <Link to="/AddNewStud">
                   <button className="grey darken-3 waves-effect waves-light btn-large" >הוסף תלמיד חדש</button>
                </Link>
             </div>
             <div className="buttLine">
                 <Link>
                   <button className="grey darken-3 waves-effect waves-light btn-large" >צפיה במצב פיננסי כללי</button>
                </Link>
                <Link>
                   <button className="grey darken-3 waves-effect waves-light btn-large" >צפיה בבתי ספר</button>
                </Link>
                <Link  to="/SulamTeachers">
                   <button className="grey darken-3 waves-effect waves-light btn-large " >צפיה במורים</button>
                </Link>
                <Link to="/listPage">
                   <button className="grey darken-3 waves-effect waves-light btn-large" >צפיה בתלמידים</button>
                </Link>

             </div>
        </div>
    )
}

export default Buttons;