import React, { Component } from 'react';
import Schools from './schools';
import Program from './program';
import Grade from './grade';
import Student from './students';
import './listPage.css';
import firebase from '../../FireBase/FireStore';
import { tr } from 'date-fns/esm/locale';
import MainCard from '../students/mainCard.js'
import CheckAuth from '../auth/checkAuth';

class ListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student:"",
            program:"",
            grade:"ז",
            school:"",
            studentList:[],
            programList:[],
            gradeList:["ז","ח","ט","י","יא","יב"],
            schoolList:[],
            gradeView: false,
            programView: false,
            studentView:false,
            studentSelected:false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStu = this.handleChangeStu.bind(this);
        this.readFromDB = this.readFromDB.bind(this);
      }

      componentDidMount() {
        this.readFromDB();
        
    }
        
    readFromDB(){
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfSchools").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ schoolList: arrTemp , school: arrTemp[0].schoolName });
        });

        db.collection("listOfProgs").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data().progName);
            });
            currentComponent.setState({ programList: arrTemp , program: arrTemp[0]});
        });

        db.collection("listOfStudents").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ studentList: arrTemp ,student: arrTemp[0]});
        });

        this.setState({gradeView:false,programView:false,studentView:false,studentSelected:false})
    }   

       handleChange(e) {
        this.setState({[e.target.name]: e.target.value});

        if(e.target.name == "school")
            this.setState({gradeView:true,programView:false,studentView:false,studentSelected:false})
        if(e.target.name == "grade")
            this.setState({gradeView:true,programView:true,studentView:false,studentSelected:false})
        if(e.target.name == "program")
            this.setState({gradeView:true,programView:true,studentView:true,studentSelected:false})
      }
      handleChangeStu(e) {
        this.setState({student: this.state.studentList[e.target.value], studentSelected:true});
     }

        render(){
        return(
        <div className="dashboard container mainBlock">
            <CheckAuth/>

            {this.state.studentSelected ? 
            <div>
            <button onClick={this.readFromDB}>חיפוש חדש</button>
            <MainCard student={this.state.student}/>
            </div>
            :

            <div className="row">

                <div className="colSt col s12 m2 offset-m2">
                {this.state.studentView ? 
                     <Student school={this.state.school} grade={this.state.grade} program={this.state.program} student={this.state.student} studentList={this.state.studentList} onChangeStu={this.handleChangeStu}/>
                :null}
                </div>
            
            
                <div className="col s12 m2 colSt">
                {this.state.programView ? 
                   <Program program={this.state.program} programList={this.state.programList} onChange={this.handleChange}/>  
                   :null}
                   </div>
            
            
                <div className="col s12 m2 colSt">
                {this.state.gradeView ? 
                     <Grade grade={this.state.grade} gradeList={this.state.gradeList} onChange={this.handleChange}/>
                     :null}
                     </div>
            

                <div className="col s12 m2 colSt">
                    <Schools school={this.state.school} schoolList={this.state.schoolList} onChange={this.handleChange}/>
                 </div>
            </div>
            }

        </div>

        )
    }
}

export default ListPage;