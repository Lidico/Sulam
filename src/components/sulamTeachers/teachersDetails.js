import React, { Component } from 'react';
import './teacherDet.css';
import firebase from '../../FireBase/FireStore';    
import StudOfTeach from './studOfTeach';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



class TeachersDeatails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SulamTeacherID: props.match.params.id,
            imgUrl:'',
            shemToar:'',
            fName:'',
            sName:'',
            phoneNumber:'',
            phoneNumberEdit: false,
            Email:'',
            EmailEdit: false,
            address:'',
            addressEdit: false,
            generalDescription:'',
            generalDescriptionEdit: false,
            TeacherMiktzuaList: [],
            sulamTeacherStudentList:[],
            TeacherMiktzuaListEdit: false,

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
    
componentDidMount() {

    const currentComponent = this;
    const db = firebase.firestore();

    var docRef = db.collection("listOfTeachers").doc(this.state.SulamTeacherID);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
             currentComponent.setState({
                shemToar:doc.data().shemToar,
                fName:doc.data().fName,
                imgUrl:doc.data().imgUrl,
                sName:doc.data().sName,
                phoneNumber:doc.data().phoneNumber,
                Email:doc.data().Email,
                address:doc.data().address,
                generalDescription:doc.data().generalDescription,
                TeacherMiktzuaList: doc.data().TeacherMiktzuaList,
                sulamTeacherStudentList: doc.data().sulamTeacherStudentList,
            }) 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}


handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    if(e.target.type == "checkbox"){
        let temp = this.state.TeacherMiktzuaList
        if(temp.includes(e.target.value))
            temp = temp.filter(v => v != e.target.value);  
        else
            temp.push(e.target.value);

        this.setState({TeacherMiktzuaList:temp})  
    }
    else{
        this.setState({[e.target.name]: e.target.value});
    }
}
handleEdit(e) {
    this.setState({[e.target.name]: true});
}
handleSave(e) {
    this.setState({[e.target.name]: false}); 
    const db = firebase.firestore();
    db.collection("listOfTeachers").doc(this.state.SulamTeacherID).update({
        [e.target.title]: e.target.slot
    });
}

render(){

    let studentsListTeacher =  this.state.sulamTeacherStudentList.map((listOfStudents,StudentiD) =><Link to = {"/MainCard/" + listOfStudents.StudentiD} ><button name="sulamTeacher" key={StudentiD} onClick={this.handleChange} title={StudentiD} ><StudOfTeach id={listOfStudents.StudentiD} imgUrl={listOfStudents.imgUrl}  fName = {listOfStudents.fName} sName = {listOfStudents.sName}/></button></Link>)
    if(studentsListTeacher.length==0){
        studentsListTeacher = <span className="headLinePD">למורה זה אין אף תלמיד רשום</span>;
    }

   function profList(array){
        let newList = "";
        for(let i = 0; i<array.length ; i++){
           newList += array[i];
           if(i!=array.length-1){
               newList += ", ";
               continue;
           }
        }
        return newList;
       }
      
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox"><span className="headerTextPrimary">{this.state.shemToar} {this.state.fName} {this.state.sName}</span></div>
                    <img src={this.state.imgUrl} alt="" className="profImage"></img>
                </div>
            </div>
           <div className="detailsBlock">
           <h5>פרטים אישיים</h5>

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
                    <button className="buttonEdit" name="phoneNumberEdit"  value={this.state.phoneNumberEdit} title="phoneNumber" slot={this.state.phoneNumber} onClick={this.handleSave}>שמור</button><br/>
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
                <button className="buttonEdit" name="EmailEdit" value={this.state.EmailEdit} title="Email" slot={this.state.Email} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                (<div>
                <span className="headLinePD">דוא"ל:</span><span className="contentPD">{this.state.Email}</span>
                <button className="buttonEdit" name="EmailEdit" value={this.state.EmailEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

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


                    {this.state.generalDescriptionEdit ? 
                (<div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD">  מידע כללי על המורה: </span>
                        <textarea
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
                    <button className="buttonEdit" name="generalDescriptionEdit" value={this.state.generalDescriptionEdit} title="Description" slot={this.state.generalDescription} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">מידע כללי על המורה:</span><span className="contentPD">{this.state.generalDescription}</span>
                    <button className="buttonEdit" name="generalDescriptionEdit" value={this.state.generalDescriptionEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}

                    {this.state.TeacherMiktzuaListEdit ? 
                (<div className="inpBox">
                <label>
                <span dir="rtl" className="headLinePD"> מקצועות הנלמדים ע"י המורה: </span>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox"  value="מתמטיקה" onChange={this.handleChange} />
                                <span>מתמטיקה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="ספרות" onChange={this.handleChange}/>
                                <span>ספרות</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="פיזיקה" onChange={this.handleChange} />
                                <span>פיזיקה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="היסטוריה" onChange={this.handleChange} />
                                <span>היסטוריה</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="אזרחות" onChange={this.handleChange} />
                                <span>אזרחות</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox"  value="אנגלית" onChange={this.handleChange} />
                                <span>אנגלית</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="תנך" onChange={this.handleChange} />
                                <span>תנ"ך</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="לשון" onChange={this.handleChange} />
                                <span>לשון</span>
                            </label>
                        </p>
                    </label>
                    <button className="buttonEdit" name="TeacherMiktzuaListEdit" value={this.state.TeacherMiktzuaListEdit} title="TeacherMiktzuaList" slot={this.state.TeacherMiktzuaList} onClick={this.handleSave}>שמור</button><br/>
                </div>)
                :
                ( <div> <span className="headLinePD">מקצועות הנלמדים ע"י המורה:</span><span className="contentPD">{profList(this.state.TeacherMiktzuaList)}</span>
                    <button className="buttonEdit" name="TeacherMiktzuaListEdit" value={this.state.TeacherMiktzuaListEdit} onClick={this.handleEdit}>עריכה</button><br/></div>)}
                 <br/><hr className="borderLine"/><br/>
                  <h5>רשימת תלמידים</h5>
                  {studentsListTeacher}

            </div>
        </div>

        )
    }
}

export default TeachersDeatails;