
import React from 'react';

const SigninForm = (props) => {
    return(
            <div>
                    <h5 className="grey-text text-darken-3">כניסת משתמש</h5>
                        <div dir="rtl" className="input-field">
                            <input dir="rtl"  type="email" id="email" onChange={props.handleChange}/>
                            <label dir="rtl" htmlFor="email">דואר אלקטרוני</label>
                        </div>
                        <div dir="rtl" className="input-field">
                            <input dir="rtl" type="password" id="password" onChange={props.handleChange}/>
                            <label dir="rtl" htmlFor="password">סיסמה</label>
                        </div>
                        <div className="input-field">
                            <button className="btn grey darken-3 waves-effect waves-light z-depth-0" onClick={props.SignIn}>כניסה</button>
                        </div>
            </div>
    )
}

export default SigninForm;