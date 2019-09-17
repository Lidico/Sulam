import React, { Component } from 'react';
import Graph from './graph';
import ProffList from './proffList';


class AcademyDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props.student.listOfmiktzout);
        this.state = {
            miktzuutList:props.student.listOfmiktzout
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangebirthDate = this.handleChangebirthDate.bind(this);
      }

// componentDidMount() {
// console.log(this.props.student.listOfMiktzut)

// }

handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}
handleChangebirthDate(e) {
    this.setState({birthDate: e});
  }
handleEdit(e) {
    this.setState({[e.target.name]: true});
    console.log(this.state.birthDateEdit)
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
         <div className="graphButtons">
                <button  className="grey darken-3 waves-effect waves-light btn-large">הוסף מחצית</button><br/><br/>
                <button className="grey darken-3 waves-effect waves-light btn-large" onClick={this.handleAdd}>הוסף ציון</button><br/><br/>
        </div>
        <ProffList mikztuut={this.state.miktzuutList}/>
    </div>
       
       )
    }
}

export default AcademyDetails;