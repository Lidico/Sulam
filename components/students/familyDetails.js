import React from 'react';
import { Link } from 'react-router-dom'

const FamilyDetails = () => {
    return(
        <div className="personalDataBox">
            <h5>אנשי קשר</h5>
            <span className="headLinePD">איש קשר:</span><span className="contentPD">שלמה יזרניצקי</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">טלפון:</span><span className="contentPD">05048888888</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">איש קשר נוסף:</span><span className="contentPD">פרלה יזרניצקי</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <span className="headLinePD">טלפון:</span><span className="contentPD">05688884444</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <br/><hr className="borderLine"/><br/>
            <h5>מצב בבית</h5>
            <span className="headLinePD">יצחק נולד ברוסיה ועלה לארץ ב1924, הוריו פרלה ושלמה הורים תומכים וטובים שדואגים לרווחתו, אך מרבים לריב בינהם.</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/><br/>
            <span className="headLinePD">מספר אחים:</span><span className="contentPD">3</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
            <br/><hr className="borderLine"/><br/>
            <h5>מידע כללי</h5>
            <span className="headLinePD">מצב כלכלי לא פשוט, אבא עזב את הבית לפני שנה, אך חזר להתגורר בו- עדיין מתנהלים ריבים.</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/><br/><br/>

        </div>
    )
}

export default FamilyDetails;