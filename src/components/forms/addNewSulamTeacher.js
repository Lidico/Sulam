import React, { Component } from 'react';
import './form.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import FileUploader from "react-firebase-file-uploader";
import defImg from './defImg.jpg';
import CheckAuth from '../auth/checkAuth';


class AddNewSulamTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shemToar:'',
            fName:'',
            sName:'',
            SulamTeacherID:'',
            phoneNumber:'',
            Email:'',
            address:'',
            imgUrl: defImg,
            isUploading: false,
            generalDescription:'',
            TeacherMiktzuaList: new Array(),
            sulamTeacherStudentList: [],
            isSubmit: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
        this.handleUploadError = this.handleUploadError.bind(this);
        this.handleUploadStart = this.handleUploadStart.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
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
          .ref("teacherImg")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ imgUrl: url, progress: [] }));
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const db = firebase.firestore();

        db.settings({});

        db.collection("listOfTeachers").doc(this.state.SulamTeacherID).set({
            shemToar:this.state.shemToar,
            fName:this.state.fName,
            sName:this.state.sName,
            SulamTeacherID:this.state.SulamTeacherID,
            phoneNumber:this.state.phoneNumber,
            Email:this.state.Email,
            imgUrl:this.state.imgUrl,

            address:this.state.address,
            TeacherMiktzuaList:this.state.TeacherMiktzuaList,
            generalDescription:this.state.generalDescription,
        }).then(() => this.setState({isSubmit:true})); 
      }

    render(){
        
        let selectImg = false;
        if (this.state.imgUrl !==defImg) selectImg = true;
    
        return(
        <div className="formPage">
            <CheckAuth/>
            <div align="right" className="formBox">
                <div align="right" className="formCont">
                    <h4 className="rightHeb">הוספת מורה חדש</h4><br/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר שם תואר: </span>
                        <select className="browser-default" dir="rtl" name="shemToar" value={this.state.value} onChange={this.handleChange}>
                        <option value="מר\גברת">מר\גברת</option>
                        <option value="דוקטור">ד"ר</option>
                        <option value="פרופסור">פרופסור</option>
                    </select>
                    </label>
                </div>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> שם פרטי: </span>
                            <input
                                 
                                required
                                dir="rtl"
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
                                name="SulamTeacherID"
                                placeholder="הכנס מס' תעודת זהות"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                <div className="inpBox">
                        <label>
                        <span  dir="rtl" className="headLinePD"> כתובת: </span>
                            <input
                                 
                                required
                                dir="rtl"
                                type="text"
                                name="address"
                                placeholder="הכנס כתובת"
                                value={this.state.StudentiD}
                                onChange={this.handleChange}
                            />
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
                                type="text"
                                name="Email"
                                placeholder="הכנס דוא''ל"
                                value={this.state.Email}
                                onChange={this.handleChange}
                            />
                    </label>
                </div>
                    <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מקצועות לימוד: </span>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="מתמטיקה" onChange={this.handleChange} />
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
                                <input dir="rtl" type="checkbox" value="אנגלית" onChange={this.handleChange} />
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
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="מחשבים" onChange={this.handleChange} />
                                <span>מחשבים</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input dir="rtl" type="checkbox" value="כימיה" onChange={this.handleChange} />
                                <span>כימיה</span>
                            </label>
                        </p>
                    </label>
                </div>

                <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD">  מידע כללי על המורה: </span>
                        <textarea
                          className="materialize-textarea"
                        dir="rtl"
                      rows="4"
                      cols="50"
                      required
                      name="generalDescription"
                      placeholder="מידע כללי על המורה.."
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
                    storageRef={firebase.storage().ref("teacherImg")}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onUploadStart={this.handleUploadStart}
                    onProgress={this.handleProgress}
                  />
                 
                </div>
                </label>
                <br/>
                
                <div className="courseButtons">
                    <button className="grey darken-3 waves-effect waves-light btn-large">שלח</button><br/><br/>
                    {this.state.isSubmit ? (<Redirect to={{pathname: "/Dashboard", state:{SulamTeacherID:this.state.SulamTeacherID}}} ></Redirect>):null}

                </div>
                </form>
                </div>
            </div>

        </div>

        )
    }
}
    

export default AddNewSulamTeacher;