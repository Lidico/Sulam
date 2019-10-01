import React, { Component } from 'react';
import firebase from '../../FireBase/FireStore';



class FamilyDetails extends Component {
        constructor(props) {
            super(props);
            this.state = {
                StudentiD: props.student.StudentiD,
                firstContactName: props.student.firstContactName,
                firstContactNameEdit: false,
                firstContPhoneNum: props.student.firstContPhoneNum,
                firstContPhoneNumEdit: false,
                secondContactName: props.student.secondContactName,
                secondContactNameEdit: false,
                secondContPhoneNum: props.student.secondContPhoneNum,
                secondContPhoneNumEdit: false,
                familyStatusEdit: false,
                familyStatus: props.student.familyStatus,
                generalDescription: props.student.generalDescription,
                numOfbrothers: props.student.numOfbrothers,
                generalDescriptionEdit: false,
                numOfbrothersEdit: false,
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

    render(){   
        return(
            <div className="personalDataBox">
                <h5>אנשי קשר</h5>
                {this.state.firstContactNameEdit ? 
                (<div className="inpBox">
                                               <label>
                        <span dir="rtl"  className="headLinePD">  איש קשר: </span>
                        <input   
                                required
                                dir="rtl"
                                type="text"
                                name="firstContactName"
                                placeholder="הכנס שם מלא"
                                value={this.state.firstContactName}
                                onChange={this.handleChange}
                            />
                    </label>
                    <button className="buttonEdit" name="firstContactNameEdit"  title="firstContactName" slot={this.state.firstContactName}  value={this.state.firstContactNameEdit} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                :
                    (<div><span className="headLinePD">איש קשר:</span><span className="contentPD">{this.state.firstContactName}</span>
                    <button className="buttonEdit" name="firstContactNameEdit"  value={this.state.firstContactNameEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                {this.state.firstContPhoneNumEdit ?
                (<div className="inpBox">
                <label>
                        <span  dir="rtl" className="headLinePD">  טלפון: </span>
                        <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="firstContPhoneNum"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.firstContPhoneNum}
                                onChange={this.handleChange}
                            />
                    </label>
                <button className="buttonEdit" name="firstContPhoneNumEdit" value={this.state.firstContPhoneNumEdit} title="firstContPhoneNum" slot={this.state.firstContPhoneNum}  onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.firstContPhoneNum}</span>
                <button className="buttonEdit" name="firstContPhoneNumEdit" value={this.state.firstContPhoneNumEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                {this.state.secondContactNameEdit ? 
                (<div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> איש קשר שני: </span>
                            <input
                                required
                                dir="rtl"
                                type="text"
                                name="secondContactName"
                                placeholder= "הכנס שם מלא"
                                value = {this.state.secondContactName}
                                onChange={this.handleChange}
                            />
                    </label>
                    <button className="buttonEdit" name="secondContactNameEdit"  title="secondContactName" slot={this.state.secondContactName}  value={this.state.secondContactNameEdit} onClick={this.handleSave}>שמור</button><br/>
                    </div>)
                :
                    (<div><span className="headLinePD">איש קשר שני:</span><span className="contentPD">{this.state.secondContactName}</span>
                    <button className="buttonEdit" name="secondContactNameEdit"  value={this.state.secondContactNameEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                
                {this.state.secondContPhoneNumEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> טלפון: </span>
                    <input
                        required
                        dir="rtl"
                        type="text"
                        name="secondContPhoneNum"
                        placeholder="הכנס מס' טלפון"
                        value={this.state.secondContPhoneNum}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="buttonEdit" name="secondContPhoneNumEdit" value={this.state.secondContPhoneNumEdit} title="secondContPhoneNum" slot={this.state.secondContPhoneNum}  onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">טלפון:</span><span className="contentPD">{this.state.secondContPhoneNum}</span>
                <button className="buttonEdit" name="secondContPhoneNumEdit" value={this.state.secondContPhoneNumEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                <br/><hr className="borderLine"/><br/>
                <h5>מצב בבית</h5>

                {this.state.familyStatusEdit ? 
                (<div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD">  מצב כללי בבית: </span>
                        <textarea
                        className="materialize-textarea"
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="familyStatus"
                      placeholder="מלא את הדיווח"
                      value={this.state.familyStatus}
                      onChange={this.handleChange}
                    />
                    </label>
                    <button className="buttonEdit" name="familyStatusEdit" value={this.state.familyStatusEdit} title="familyStatus" slot={this.state.familyStatus} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">מצב כללי בבית:</span><span className="contentPD">{this.state.familyStatus}</span>
                    <button className="buttonEdit" name="familyStatusEdit" value={this.state.familyStatusEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                {this.state.numOfbrothersEdit ?
                (<div className="inpBox">
                <label>
                <span dir="rtl"  className="headLinePD"> מס' האחים: </span>
                    <input
                        required
                        dir="rtl"
                        type="text"
                        name="numOfbrothers"
                        placeholder={this.state.numOfbrothers}
                        value={this.state.numOfbrothers}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="buttonEdit" name="numOfbrothersEdit" value={this.state.numOfbrothersEdit} title="numOfbrothers" slot={this.state.numOfbrothers}  onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">מס' אחים:</span><span className="contentPD">{this.state.numOfbrothers}</span>
                <button className="buttonEdit" name="numOfbrothersEdit" value={this.state.numOfbrothersEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                <br/><hr className="borderLine"/><br/>
                 <h5>מידע כללי</h5>

                 {this.state.generalDescriptionEdit? 
                (<div className="inpBox">
                    <label>
                        <span dir="rtl" className="headLinePD">  מידע נוסף: </span>
                        <textarea
                        className="materialize-textarea"
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="generalDescription"
                      placeholder="מלא את הדיווח השבועי"
                      value={this.state.generalDescription}
                      onChange={this.handleChange}
                    />
                    </label>
                    <button className="buttonEdit" name="generalDescriptionEdit" value={this.state.generalDescriptionEdit} title="generalDescription" slot={this.state.generalDescription} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">מצב כללי בבית:</span><span className="contentPD">{this.state.generalDescription}</span>
                    <button className="buttonEdit" name="generalDescriptionEdit" value={this.state.generalDescriptionEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                <br/>
                <br/>
            </div>
        )
    }
}

export default FamilyDetails;
