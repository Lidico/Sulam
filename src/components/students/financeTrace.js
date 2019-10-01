import React, { Component } from 'react';
import AllFinanceTraces from './allFinanceTraces';
import firebase from '../../FireBase/FireStore';


class FinanceTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            program: props.student.program,
            programData:'',
            traceList: props.student.listOfTrace,
            studentID: props.student.StudentiD
        };
    
      }
componentDidMount() {
const currentComponent = this;
const db = firebase.firestore();
var docRef = db.collection("listOfProgs").doc(currentComponent.state.program);
docRef.get().then(function(doc) {
    if (doc.exists) {
        let progDat= doc.data();
        console.log(progDat)
        currentComponent.setState({
            programData: progDat
        })
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}

render(){
    let isPaid = this.state.traceList.filter(num=> num.isGetPaid).length;
    let isNotPaid = this.state.traceList.filter(num=> !num.isGetPaid).length;
    return(
     <div className="financeSect">
             <div className="FinanceTraceBoxHD">
                <span className="tab">תאריך המפגש</span><span className="tab">תכנית</span><span className="tab">שם המורה המלמד</span><span className="tab">סטטוס</span><span  className="tab">שולם לתלמיד</span>
            </div>
         <AllFinanceTraces traceList={this.state.traceList} studentID={this.state.studentID} programData={this.state.programData}/>
         <div>
             <span className="sahac">{isNotPaid*this.state.programData.cost}</span><span className="sahac">:סה"כ חוב לתלמיד</span><br/>
             <span className="sahac">{isPaid*this.state.programData.cost}</span><span className="sahac">:סה"כ שולם לתלמיד</span>
         </div>
    </div>
       
       )
    }
}

export default FinanceTrace;