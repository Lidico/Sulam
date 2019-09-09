import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import firebase from '../../FireBase/FireStore';
import { Redirect } from 'react-router';
import CheckAuth from '../auth/checkAuth'
import FileUploader from "react-firebase-file-uploader";
import defImg from './defImg.jpg';

function SchoolSelector(props) {
    let schoolList = [];
    schoolList = props.schools;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="school" dir="rtl">
        {schoolList.map((object, schoolName) => {
          return (
            <option key={schoolName} value={object.schoolName}>
              {object.schoolName}
            </option>
          );
        })}
      </select>
    );
  }

  function ProgramSelector(props) {
    let progList = [];
    progList = props.programs;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="program" dir="rtl">
        {progList.map((object, progName) => {
          return (
            <option key={progName} value={object.progName}>
              {object.progName}
            </option>
          );
        })}
      </select>
    );
  }

class AddNewStud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName:'',
            sName:'',
            StudentiD:'',
            gender: 'זכר',
            phoneNumber:'',
            Email:'',
            address:'',
            birthDate:new Date(),
            vetekInSulam:new Date(),
            program:'',
            gishaLeMahshev:'לא',
            school:'',
            kita:'',
            teacherName:'',
            teacherPhone:'',
            firstContactName:'',
            firstContPhoneNum:'',
            secondContactName:'',
            secondContPhoneNum:'',
            numOfbrothers:'',
            familyStatus:'',
            generalDescription:'',
            isUploading: false,
            imgUrl: defImg,
            schoolList:[],
            programList:[],
            mifgashList:[],
            listOfMiktzuut:[],
            
            isSubmit: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
        this.handleChangevetekInSulam = this.handleChangevetekInSulam.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
        this.handleUploadError = this.handleUploadError.bind(this);
        this.handleUploadStart = this.handleUploadStart.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
      }
    
      handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }
      handleChangevetekInSulam(e) {
        this.setState({vetekInSulam: e});
      }
      handleChangebirthDate(e) {
        this.setState({birthDate: e});
      }

      handleUploadStart() {
        this.setState({ isUploading: true });
      }
      handleUploadError(error) {
        console.error(error);
      }
      handleProgress = progress => this.setState({ progress: progress + "%" });
      handleUploadError(error) {
        alert("Upload Error: " + error);
      }
      handleUploadSuccess(filename) {
        this.setState({ isUploading: false });
        firebase
          .storage()
          .ref("studImages")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ imgUrl: url, progress: [] }));
      }
 

      componentDidMount() {
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfSchools").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ schoolList: arrTemp });
        });

        db.collection("listOfProgs").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ programList: arrTemp });
        });


        }
    
      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});

        db.collection("listOfStudents").doc(this.state.StudentiD).set({
            fName:this.state.fName,
            sName:this.state.sName,
            StudentiD:this.state.StudentiD,
            gender:this.state.gender,
            phoneNumber:this.state.phoneNumber,
            Email:this.state.Email,
            address:this.state.address,
            birthDate:this.state.birthDate,
            vetekInSulam:this.state.vetekInSulam,
            program:this.state.program,
            gishaLeMahshev:this.state.gishaLeMahshev,
            school:this.state.school,
            kita:this.state.kita,
            teacherName:this.state.teacherName,
            teacherPhone:this.state.teacherPhone,
            firstContactName:this.state.firstContactName,
            firstContPhoneNum:this.state.firstContPhoneNum,
            secondContactName:this.state.secondContactName,
            secondContPhoneNum:this.state.secondContPhoneNum,
            numOfbrothers:this.state.numOfbrothers,
            familyStatus:this.state.familyStatus,
            generalDescription:this.state.generalDescription,
        }).then(() => this.setState({isSubmit:true})); 
      }
      

    render(){

        let selectImg = false;
        if (this.state.imgUrl !==defImg) selectImg = true;
        console.log();
        return(
        <div className="formPage">
            <CheckAuth/>
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוסף תלמיד חדש</h4><br/><br/><br/>
                    <h5 className="rightHeb">פרטים אישיים:</h5><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label className="active">
                        <span dir="rtl" className="headLinePD"> שם פרטי: </span>
                            <input
                                required
                                type="text"
                                name="fName"
                                placeholder="הכנס שם פרטי"
                                dir="rtl"
                                value={this.state.fName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> שם משפחה: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="sName"
                                placeholder="הכנס שם משפחה"
                                value={this.state.sName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' ת"ז: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="StudentiD"
                                placeholder="הכנס מס' תעודת זהות"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">

<label>
<span dir="rtl"  className="headLinePD"> מין: </span><br/>
<p>
    <label>
        <input name="gender" type="radio" checked={this.state.gender === 'זכר'} value='זכר' onChange={this.handleChange} />
        <span>זכר</span>
    </label>
    </p>
    <p>
    <label>
        <input name="gender" type="radio" checked={this.state.gender === 'נקבה'} value='נקבה' onChange={this.handleChange}/>
        <span>נקבה</span>
    </label>
    </p>
</label>
</div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> מס' טלפון: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="phoneNumber"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> דוא"ל: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="email"
                                name="Email"
                                placeholder="הכנס דוא''ל"
                                value={this.state.Email}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> כתובת: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="address"
                                placeholder="הכנס כתובת"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div dir="rtl" className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> תאריך לידה: </span>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                placeholderText="מלא תאריך לידה"
                                name="birthDate"
                                selected={this.state.birthDate}
                                onChange={this.handleChangebirthDate}
                            />
                    </label>
                </div>
                <div dir="rtl"  className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD">  תאריך כניסה לסולם לעתיד: </span>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                placeholderText="מלא תאריך כניסה"
                                name="vetekInSulam"
                                selected={this.state.vetekInSulam}
                                onChange={this.handleChangevetekInSulam}
                            />
                    </label>
                </div>
                <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר תוכנית: </span>
                    <ProgramSelector
                        value={this.state.program}
                        func={this.handleChange}
                        programs={this.state.programList}
                    />
                    </label>
                 </div>
                 <div className="inpBox">

                                    <label>
                                    <span dir="rtl"  className="headLinePD">  גישה למחשב: </span><br/>
                                    <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" checked={this.state.gishaLeMahshev === 'לא'} value="לא" onChange={this.handleChange}/>
                                            <span>לא</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label>
                                            <input name="gishaLeMahshev" type="radio" checked={this.state.gishaLeMahshev === 'כן'} value="כן" onChange={this.handleChange} />
                                            <span>כן</span>
                                        </label>
                                        </p>
                                </label>
                            </div>
                    <h5 className="rightHeb">פרטים לימודיים:</h5><br/><br/>
                    <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר בית ספר: </span>
                    <SchoolSelector
                        value={this.state.school}
                        func={this.handleChange}
                        schools={this.state.schoolList}
                    />

                    </label>
                 </div>
                 <div className="inpBox">
                    <label>
                    <span  dir="rtl" className="headLinePD"> בחר כיתה: </span>
                    <select className="browser-default" dir="rtl" name="kita" value={this.state.kita} onChange={this.handleChange}>
                        <option value="ז">ז'</option>
                        <option value="ח">ח'</option>
                        <option value="ט">ט'</option>
                        <option value="י">י'</option>
                        <option value="יא">י"א</option>
                        <option value="יב">י"ב</option>
                    </select>
                    </label>
                 </div>
                 <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD"> שם המחנכ\ת: </span>
                        <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="teacherName"
                                placeholder="הכנס שם המחנכ\ת"
                                value={this.state.teacherName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD">  טלפון: </span>
                        <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="teacherPhone"
                                placeholder="הכנס מס' טלפון"
                                value={this.state.teacherPhone}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <h5 className="rightHeb">מצב בבית:</h5><br/><br/>
                <div className="inpBox">
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
                </div>
                <div className="inpBox">
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
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl"  className="headLinePD">  איש קשר נוסף: </span>
                        <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="secondContactName"
                                placeholder="הכנס שם מלא"
                                value={this.state.secondContactName}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  טלפון: </span>
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
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מס' אחים: </span>
                        <input
                                required
                                dir="rtl"
                                type="text"
                                name="numOfbrothers"
                                placeholder="הכנס מס' אחים"
                                value={this.state.numOfbrothers}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מצב כללי בבית: </span>
                        <textarea
                        className="materialize-textarea"
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="familyStatus"
                      placeholder="מלא את הדיווח השבועי"
                      value={this.state.familyStatus}
                      onChange={this.handleChange}
                    />
                    </label>
                </div>
                <div className="inpBox">
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
                </div>

                <label>
                <div className="inpBox">
                {selectImg ? (
                    <div>
                      <img
                        className="profImageStud"
                        alt="החלף תמונה"
                        src={this.state.imgUrl}
                      />
                      <div>
                        {this.state.progress}החלף תמונה
                      </div>
                    </div>
                  ) : (
                    <div className="green waves-effect waves-light btn">
                      הוספת תמונה {this.state.progress}
                    </div>
                  )}
                  <br/>


                <FileUploader
                    hidden
                    accept="image/*"
                    randomizeFilename
                    storageRef={firebase.storage().ref("studImages")}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onUploadStart={this.handleUploadStart}
                    onProgress={this.handleProgress}
                  />
                 
                </div>
                </label>
                <br/>

             
                <button className="grey darken-3 waves-effect waves-light btn-large">המשך</button><br/><br/>
                </form>
                </div>
            </div>

            {this.state.isSubmit ? (<Redirect to={{pathname: "/AddNewMiktzua", state:{StudentiD:this.state.StudentiD}}} ></Redirect>):null}
        </div>

        )
    }
}
    

export default AddNewStud;