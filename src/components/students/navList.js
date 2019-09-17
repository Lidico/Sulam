import React from 'react';
import { Link } from 'react-router-dom'
import PersonalDetails from './personalDetails';
import AcademyDetails from './academyDetails';
import FamilyDetails from './familyDetails';
import Tracing from './tracing';



const navList = (props) => {
    return(
        <div lassName="project-list section listBlock">
            
            <div className="navListBox"> 
                    <button className="buttonNav" name="personalDetailsView" onClick={props.onClick}>פרטים אישיים</button>
                    <button className="buttonNav" name="familyDetailsView" onClick={props.onClick}>מצב משפחתי</button>
                    <button className="buttonNav" name="academyDetailsView" onClick={props.onClick}>מצב לימודי</button>
                    <button className="buttonNav" name="tracing" onClick={props.onClick}>מעקב שבועי</button>
                    <button className="buttonNav">מעקב פיננסי</button>
            </div>
            <div className="dataBox">
                {props.personalDetailsView ?
                    <PersonalDetails student={props.student}/>
                    :
                    null
                }

                {props.academyDetailsView ?
                    <AcademyDetails student={props.student}/>
                    :
                    null
                }

                {props.familyDetailsView ?
                    <FamilyDetails student={props.student}/>
                    :
                    null
                }

                {props.tracing ?
                    <Tracing student={props.student}/>
                    :
                     null
                }
            </div>
         </div>
    )
}

export default navList;