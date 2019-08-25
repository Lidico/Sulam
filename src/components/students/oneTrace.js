import React from 'react';
import { Link } from 'react-router-dom';

const OneTrace = () => {
    return(
        <div className="traceBox">
           <span className="dateAndTeacher">15.08.2019 ע"י צ'ופס לוי</span><br/><span className="contentPD">היום בשיעור התלמיד יצחק שלט בנגזרת חד צדדית אך נטה לחלום המון.</span>
           <div className="btnDel"><Link to="/"><button className="deep-orange waves-effect waves-light btn">מחיקה</button></Link></div>
            <div className="checkBOxes">
                <p>
                <label>
                    <input type="checkbox" />
                    <span>לא הגיע לשיעור</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>איחר</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>קיבל תלוש</span>
                </label>
                </p>
            </div>
        </div>
    )
}

export default OneTrace;
