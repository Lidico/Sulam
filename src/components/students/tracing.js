import React, { Component } from 'react';
import './mainCard.css';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';
import AllTraces from './allTraces';

function TheacherSelector(props) {
    let teachersList = [];
    teachersList = props.teachers;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="sulamTeacher" dir="rtl">
        {teachersList.map((object, SulamTeacherID) => {
          return (
            <option key={SulamTeacherID} value={object.SulamTeacherID}>
              {object.shemToar+" "+object.fName+" "+object.sName}
            </option>
          );
        })}
      </select>
    );
  }


class Tracing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: props.student.StudentiD,
            sulamTeacher:"",
            teachersList:[],
            shemToar:"",
            fName:"",
            sName:"",
            dateOfTrace:"",
            description:"",
            traceList:props.student.listOfTrace

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
        
      }
      
      componentDidMount() {
        let currentComponent = this;
        let firstTeach;
        const db = firebase.firestore();
        let arrTemp = [];
        db.collection("listOfTeachers").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({
                 teachersList: arrTemp
            });
        });
        
        db.collection("listOfTeachers")
        .limit(1)
        .get()
        .then(querySnapshot => {
            if (!querySnapshot.empty) {
                const queryDocumentSnapshot = querySnapshot.docs[0];
                let teachID = queryDocumentSnapshot.data().SulamTeacherID;
                let teachShemToar = queryDocumentSnapshot.data().shemToar;
                let teachFName = queryDocumentSnapshot.data().fName;
                let teachSName  = queryDocumentSnapshot.data().sName;
                this.setState({
                    sulamTeacher: teachID,
                    shemToar: teachShemToar,
                    fName: teachFName,
                    sName: teachSName,
                    sulamTeacherIsExist: true
               });
            } else {
                console.log("No document corresponding to the query!");
                return null;
            }
        });

    }

    handleChange(e) {
      const currentComponent = this;
      currentComponent.setState({[e.target.name]: e.target.value});
      if(e.target.name == "sulamTeacher"){
          const db = firebase.firestore();
              const ref = db.collection("listOfTeachers").doc(e.target.value);
              ref.get().then(doc => {
                  if (doc.exists) {
                       const teachShemToar = doc.data().shemToar;
                       const teachFName = doc.data().fName;
                       const teachSName  = doc.data().sName;
                       this.setState({isChangeTeacher: true,
                          shemToar: teachShemToar,
                          fName: teachFName,
                          sName: teachSName
                      })  
                  } else {
                      console.log("No such document!");
                  }
              }).catch(error => {
                  console.log("Error getting document:", error);
              });
      }
    }

handleChangeDate(e) {
    this.setState({dateOfTrace: e});
  }


  handleAdd() {
    const currentComponent = this;
    const db = firebase.firestore();
    let temp={
      isntArived: false,
      isLate: false,
      isGetPaid: false,
      details:{
        shemToar:this.state.shemToar,
        fName:this.state.fName,
        sName:this.state.sName,
        dateOfTrace:this.state.dateOfTrace,
        description:this.state.description
      }
    }
   
    let arrTemp = [temp, ...this.state.traceList]

    this.setState({traceList: arrTemp})
    db.collection("listOfStudents").doc(currentComponent.state.studentID).update({
      listOfTrace: arrTemp
    }) 
  }


  handleRemove (e){
    let temp = this.state.traceList;
    temp.splice(e.target.value,1);
    const db = firebase.firestore();
    const ref = db.collection("listOfStudents").doc(this.state.studentID);
    ref.update({
        listOfTrace: temp
    })
    this.setState({traceList:temp});
}

handleChangeCheckBox (e) {
  let temp = this.state.traceList;
  temp[e.target.value][[e.target.name]] = e.target.checked;
  const db = firebase.firestore();
  const ref = db.collection("listOfStudents").doc(this.state.studentID);
  ref.update({
      listOfTrace: temp
  })
  this.setState({[e.target.name]: e.target.checked, traceList:temp});
   
}
handleEdit(e) {
}
handleSave(e) {
}

render(){
    return(
      <div>
         {this.props.display ? <div> 
        <div className="tracingBox">
            <AllTraces handleChangeCheckBox={this.handleChangeCheckBox} removeFunc={this.handleRemove} tracingList={this.state.traceList} studentID={this.state.studentID}/>
        </div>
         <div className="addNewTrace">
                         <div className="inpBox">
                        <label>
                        <span dir="rtl" className="headLinePD"> בחר מורה סולם לעתיד: </span>
                        <TheacherSelector
                        id = "teachers"
                        value={this.state.sulamTeacher}
                        func={this.handleChange}
                        teachers={this.state.teachersList}
                    />
                    </label>
                </div>
            <div dir="rtl" className="datePic">
               <DatePicker
                    dateFormat="dd/MM/yyyy"
                    placeholderText="מלא תאריך"
                    dir="rtl"
                    name="dateOfTrace"
                    selected={this.state.dateOfTrace}
                    onChange={this.handleChangeDate}
            /> 

            </div>
            <label>
                    <textarea
                      className="materialize-textarea"
                      rows="4"
                      cols="50"
                      required
                      dir="rtl"
                      name="description"
                      onChange={this.handleChange}
                      placeholder="מלא את הדיווח השבועי"
                    />
             </label>
          <button className="grey darken-3 waves-effect waves-light btn-large" onClick={this.handleAdd}>הוספת דיווח</button>
        </div>
        </div>
        :
        null 
      }
      </div>
    )
    
    }
}

export default Tracing;