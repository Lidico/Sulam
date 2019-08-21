import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';



class PersonalDetails extends Component {
        constructor(props) {
            super(props);
            this.state = {
                phoneNumber: '54235',
                phoneNumberEdit: false,
                Email: 'shamirIsTheMan@gmail.com',
                EmailEdit: false,
                address: 'בית ראש הממשלה 22 ירושלים',
                addressEdit: false,
                birthDate: '22.10.15',
                birthDateEdit: false,
                vetekInSulam: 'שנה',
                vetekInSulamEdit: false,
                program: 'מוגברת',
                programEdit: false,
                schoolContact: 'ברוריה',
                schoolContactEdit: false,

                gishaLeMahshev: 'לא',
                gishaLeMahshevEdit: false

            };
        
            this.handleChange = this.handleChange.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleSave = this.handleSave.bind(this);
          }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleEdit(e) {
        this.setState({[e.target.name]: true});
        console.log(this.state.birthDateEdit)
    }
    handleSave(e) {
        this.setState({[e.target.name]: false});

        
    }
    render(){     
        return(
            <div className="personalDataBox">
                <h5>יצירת קשר</h5>

                {this.state.phoneNumberEdit ? 
                (<div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                className="inputB"
                                required
                                dir="rtl"
                                type="text"
                                name="phoneNumber"
                                placeholder= {this.state.phoneNumber}
                                value = {this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                    </label>
                    <button className="buttonEdit" name="phoneNumberEdit"  value={this.state.phoneNumberEdit} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                :
                    (<div><span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.phoneNumber}</span>
                    <button className="buttonEdit" name="phoneNumberEdit"  value={this.state.phoneNumberEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                {this.state.EmailEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> דוא"ל: </span>
                    <input
                        className="inputB"
                        required
                        dir="rtl"
                        type="text"
                        name="Email"
                        placeholder="הכנס דוא''ל"
                        value={this.state.Email}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="buttonEdit" name="EmailEdit" value={this.state.EmailEdit} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">דוא"ל:</span><span className="contentPD">{this.state.Email}</span>
                <button className="buttonEdit" name="EmailEdit" value={this.state.EmailEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}


               <br/><hr className="borderLine"/><br/>
                <h5>פרטים אישיים</h5>

                {this.state.addressEdit ? 
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> כתובת: </span>
                    <input
                        className="inputB"
                        required
                        dir="rtl"
                        type="text"
                        name="address"
                        placeholder="הכנס כתובת"
                        value = {this.state.address}
                        onChange = {this.handleChange}
                    />
                    </label>
                    <button className="buttonEdit" name="addressEdit" value={this.state.addressEdit} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">כתובת:</span><span className="contentPD">{this.state.address}</span>
                    <button className="buttonEdit" name="addressEdit" value={this.state.addressEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                {this.state.birthDateEdit ?
                (<div dir="rtl" className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> תאריך לידה: </span>
                    <DatePicker
                        dateFormat="dd/mm/yyyy"
                        showYearDropdown
                        isClearable={true}
                        dir="rtl"
                        placeholderText="מלא תאריך לידה"
                        name="birthDate"
                        value = {this.state.birthDate}
                        onChange = {this.onChange}
                    />
                </label>
                <button className="buttonEdit" name="birthDateEdit" value={this.state.birthDateEdit} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (
                    <div><span className="headLinePD">תאריך לידה:</span><span className="contentPD">{this.state.birthDate}</span>
                    <button className="buttonEdit" name="birthDateEdit" value={this.state.birthDateEdit} onClick={this.handleEdit}>עריכה</button><br/></div>
                )}
                
                <br/><hr className="borderLine"/><br/>
                <h5>סולם לעתיד</h5>

                {this.state.vetekInSulamEdit ?
                (<div dir="rtl"  className="inpBox">
                <label>
                <span  dir="rtl" className="headLinePD">  תאריך כניסה לסולם לעתיד: </span>
                    <DatePicker
                        dateFormat="dd/mm/yyyy"
                        showYearDropdown
                        dir="rtl"
                        isClearable={true}
                        placeholderText="מלא תאריך כניסה"
                        name="vetekInSulam"
                        value = {this.state.vetekInSulam}
                        onChange = {this.onChange}
                    />
                    </label>
                    <button className="buttonEdit" name="vetekInSulamEdit" value={this.state.vetekInSulamEdit} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (
                    <div><span className="headLinePD">ותק בסולם לעתיד:</span><span className="contentPD">{this.state.vetekInSulam}</span>
                    <button className="buttonEdit" name="vetekInSulamEdit" value={this.state.vetekInSulamEdit} onClick={this.handleEdit}>עריכה</button><br/></div>
                )}
                
                {this.state.programEdit ?
                (<div name="program" dir="rtl" class="input-field col s12">
                <select>
                <option value="" disabled selected>בחר תוכנית</option>
                <option value="regila">רגילה</option>
                <option value="mugberet">מוגברת</option>
                </select>
                <label>בחר תוכנית</label>
                    <button className="buttonEdit" name="programEdit" value={this.state.programEdit} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (
                    <div><span className="headLinePD">תוכנית:</span><span className="contentPD">{this.state.program}</span>
                    <button className="buttonEdit" name="programEdit" value={this.state.programEdit} onClick={this.handleEdit}>עריכה</button><br/></div>

                )}
                
                  
                <span className="headLinePD">איש קשר בביה"ס:</span><span className="contentPD">ברוריה</span><Link to="/"><button className="buttonEdit" name="schoolContact">עריכה</button></Link><br/>
                <span className="headLinePD">טלפון:</span><span className="contentPD">0536066600</span><Link to="/"><button className="buttonEdit">עריכה</button></Link><br/>
                
                {this.state.gishaLeMahshevEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD">  גישה למחשב: </span><br/>
                <p>
                    <label>
                        <input name="gishaLeMahshev" type="radio" value="לא" checked={this.state.gishaLeMahshev === 'לא'} onChange={this.handleChange}/>
                        <span>לא</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="gishaLeMahshev" type="radio" value="כן" checked={this.state.gishaLeMahshev === 'כן'} onChange={this.handleChange}/>
                        <span>כן</span>
                    </label>
                    </p>
                    </label>
                    <button className="buttonEdit" name="gishaLeMahshevEdit" value={this.state.gishaLeMahshevEdit} onClick={this.handleSave}>שמור</button><br/><br/><br/>
                </div>)
                :
                (
                    <div><span className="headLinePD">גישה למחשב:</span><span className="contentPD">{this.state.gishaLeMahshev}</span>
                    <button className="buttonEdit" name="gishaLeMahshevEdit" value={this.state.gishaLeMahshevEdit} onClick={this.handleEdit}>עריכה</button><br/><br/><br/> </div>
                )}
                
            </div>
        )
    }
}

export default PersonalDetails;

