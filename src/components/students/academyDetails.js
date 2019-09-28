import React, { Component } from 'react';
import Graph from './graph';
import ProffList from './proffList';


class AcademyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            miktzuutList:props.student.listOfmiktzout,
            studentID: props.student.StudentiD
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
    //const db = firebase.firestore();
    //db.collection("listOfStudents").doc(this.prop.student.StudentiD).update({

   // }); 
}
render(){

    return(
     <div>
         <Graph mikztuut={this.state.miktzuutList} />
        <ProffList mikztuut={this.state.miktzuutList} studentID={this.state.studentID}/>
    </div>
       
       )
    }
}

export default AcademyDetails;