import React, { Component } from 'react';
import './schools.css';
import firebase from '../../FireBase/FireStore';    
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


class Schools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SchoolList:[],
            school:"",
            schoolSelected:false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
      componentDidMount() {
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfSchools").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ SchoolList: arrTemp });
        });
      }

handleChange(e) {
    this.setState({sulamTeacher: this.state.SchoolList[e.target.title], theacherSelected:true});
}


handleEdit(e) {
}
handleSave(e) {
}

render(){
 
    let ListTeacher =  this.state.SchoolList.map((ListOfSchools,index) =><Link to = {"/SchoolDetails/" + ListOfSchools.schoolName} > <button className="grey darken-3 waves-effect waves-light btn-large" name="school" key={index} onClick={this.handleChange} title={index} >{ListOfSchools.schoolName}</button></Link>)
    if(ListTeacher.length==0){
        ListTeacher = <span className="headLinePD">אין בתי ספר במאגר.</span>;
    }
        return(
        <div className="mainBlockCard">
            <div className="detailsBlock">
            <h4>רשימת בתי הספר:</h4><br/>
                <div className="nameAndPhototo">
                    {ListTeacher}
                </div>
            </div>
        </div>

        )
    }
}

export default Schools;