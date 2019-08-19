import React, { Component } from 'react';
import './form.css';





class AddNewStud extends Component {
  
    render(){
        return(
        <div className="formPage">
            <div className="formBox">
                <div className="formCont">
                    <h4 className="rightHeb">הוסף תלמיד חדש</h4><br/><br/>
                    <h5 className="rightHeb">פרטים אישיים:</h5><br/>
                    <div>
                        <label>
                        <span className="headLinePD" dir="rtl"> שם פרטי: </span>
                            <input
                                className="inputB"
                                required
                                type="text"
                                name="name"
                                placeholder="הכנס שם פרטי"
                                dir="rtl"
                            />
                    </label>
                </div>
                </div>
            </div>
        </div>

        )
    }
}
    

export default AddNewStud;