import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
import Search from './search';


const Buttons = (props) => {
    return(
        <div className="buttBox">
             <div className="buttLine">
                {props.manager ? (
               <Link to="/AddNewProg">
                   <button className="grey darken-3 waves-effect waves-light btn-large" >הוסף תוכנית חדשה</button>
                </Link>
               
     
                )
                :
                (
      
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף תוכנית חדשה</button>
           )
                }

               {props.manager ? ( 
                <Link to="/AddNewSchool">
                   <button  className="grey darken-3 waves-effect waves-light btn-large" >הוסף ביה"ס חדש</button>
                </Link>
                )
                :
                (
                   <button disabled className="grey darken-3 waves-effect waves-light btn-large" >הוסף ביה"ס חדש</button>
                   )
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
                <Link to='/Schools'>
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