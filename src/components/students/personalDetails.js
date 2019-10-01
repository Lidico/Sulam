import React, { Component } from 'react';
import firebase from '../../FireBase/FireStore';



class PersonalDetails extends Component {
        constructor(props) {
            super(props);
            this.state = {
                StudentiD: props.student.StudentiD,
                phoneNumber: props.student.phoneNumber,
                phoneNumberEdit: false,
                Email: props.student.Email,
                school: props.student.school,
                schoolContactName: "",
                schoolContactNameEdit: false,
                schoolContactPhone: "",
                schoolContactPhoneEdit: false,
                EmailEdit: false,
                address: props.student.address,
                addressEdit: false,
                birthDate: props.student.birthDate.toDate(),
                vetekInSulam: props.student.vetekInSulam.toDate(),
                program: props.student.program,
                programEdit: false,
                schoolContact: props.student.schoolContact,
                schoolContactEdit: false,
                gishaLeMahshev: props.student.gishaLeMahshev,
                gishaLeMahshevEdit: false

            };
        
            this.handleChange = this.handleChange.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleSave = this.handleSave.bind(this);
            this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
          }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleChangebirthDate(e) {
        this.setState({birthDate: e});
      }
    handleEdit(e) {
        this.setState({[e.target.name]: true});
    }
    handleSave(e) {
        this.setState({[e.target.name]: false}); 
        console.log([e.target]);
        const db = firebase.firestore();
        db.collection("listOfStudents").doc(this.state.StudentiD).update({
            [e.target.title]: e.target.slot
        });
    }
    
    componentDidMount() {
        const db = firebase.firestore();
        const ref = db.collection("listOfSchools").doc(this.state.school);
         ref.get().then(doc => {
             if (doc.exists) {
                  const contSchool = doc.data().contactName;
                  const phoneSchool = doc.data().contactPhone;
                  console.log(contSchool);
                  console.log(phoneSchool);
                  this.setState({
                    schoolContactName: contSchool,
                    schoolContactPhone: phoneSchool,

                 })  
             } else {
                 console.log("No such document!");
             }
         }).catch(error => {
             console.log("Error getting document:", error); 
         }); 
    }

    render(){   
        let vetekDateFetch = this.state.vetekInSulam.getDate()+"/"+(this.state.vetekInSulam.getMonth()+1)+"/"+this.state.vetekInSulam.getFullYear();
        let birthDateFetch = this.state.birthDate.getDate()+"/"+(this.state.birthDate.getMonth()+1)+"/"+this.state.birthDate.getFullYear(); 
        return(
            <div className="personalDataBox">
                <h5>יצירת קשר</h5>

                {this.state.phoneNumberEdit ? 
                (<div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                required
                                dir="rtl"
                                type="text"
                                name="phoneNumber"
                                placeholder= {this.state.phoneNumber}
                                value = {this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                    </label>
                    <button className="buttonEdit" name="phoneNumberEdit"  title="phoneNumber" slot={this.state.phoneNumber}  value={this.state.phoneNumberEdit} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                :
                    (<div><span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.phoneNumber}</span>
                    <button className="buttonEdit" name="phoneNumberEdit"  value={this.state.phoneNumberEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                {this.state.EmailEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> דוא"ל: </span>
                    <input
                        required
                        dir="rtl"
                        type="text"
                        name="Email"
                        placeholder="הכנס דוא''ל"
                        value={this.state.Email}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="buttonEdit" name="EmailEdit" value={this.state.EmailEdit} title="Email" slot={this.state.Email}  onClick={this.handleSave}>שמור</button><br/>
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
                        required
                        dir="rtl"
                        type="text"
                        name="address"
                        placeholder="הכנס כתובת"
                        value = {this.state.address}
                        onChange = {this.handleChange}
                    />
                    </label>
                    <button className="buttonEdit" name="addressEdit" value={this.state.addressEdit} title="address" slot={this.state.address} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">כתובת:</span><span className="contentPD">{this.state.address}</span>
                    <button className="buttonEdit" name="addressEdit" value={this.state.addressEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                    <span className="headLinePD">תאריך לידה:</span><span className="contentPD">{birthDateFetch} </span><br/>

                
                <br/><hr className="borderLine"/><br/>
                <h5>סולם לעתיד</h5>

                    <span className="headLinePD">תאריך כניסה לסולם לעתיד:</span><span className="contentPD">{vetekDateFetch}</span><br/>
              
                    <span className="headLinePD">תוכנית:</span><span className="contentPD">{this.state.program}</span><br/>
 
                

                
                 <span className="headLinePD">איש קשר בביה"ס:</span><span className="contentPD">{this.state.schoolContactName}</span><br/>
                  

                <span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.schoolContactPhone}</span><br/>
                   

                 
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
                    <button className="buttonEdit" name="gishaLeMahshevEdit" value={this.state.gishaLeMahshevEdit} title="gishaLeMahshev" slot={this.state.gishaLeMahshev} onClick={this.handleSave}>שמור</button><br/><br/><br/>
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

