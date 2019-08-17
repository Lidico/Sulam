import React from 'react';
import { Link } from 'react-router-dom'


const PersonalDetails = () => {
    return(
        <div className="personalDataBox">
            <h5>יצירת קשר</h5>
          <span className="headLinePD">טלפון:</span><span className="contentPD">0505565656</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">דוא"ל:</span><span className="contentPD">shamirIsTheMan@gmail.com</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <br/><hr className="borderLine"/><br/>
            <h5>פרטים אישיים</h5>
            <span className="headLinePD">כתובת:</span><span className="contentPD">בית ראש הממשלה 22 ירושלים</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">תאריך לידה:</span><span className="contentPD">22.10.15 (גיל: 96)</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <br/><hr className="borderLine"/><br/>
            <h5>סולם לעתיד</h5>
            <span className="headLinePD">ותק בסולם לעתיד:</span><span className="contentPD">שנה וחצי</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">תוכנית:</span><span className="contentPD">מוגברת</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">איש קשר בביה"ס:</span><span className="contentPD">ברוריה</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><span className="headLinePD">טלפון:</span><span className="contentPD">0536066600</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">גישה למחשב:</span><span className="contentPD">כן</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/><br/><br/>
        </div>
    )
}

export default PersonalDetails;

