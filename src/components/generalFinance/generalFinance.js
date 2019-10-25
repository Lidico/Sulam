import React, { Component } from 'react';
import AllFinanceaStud from './allFinanceaStud';
import firebase from '../../FireBase/FireStore';


class FinanceTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programData:[],
            traceList: [],
        };
    
      }
      componentDidMount() {
        let currentComponent = this;
        const db = firebase.firestore();
        db.collection("listOfStudents").get().then(function(querySnapshot) {
            let arrTemp = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ traceList: arrTemp });
        });

        db.collection("listOfProgs").get().then(function(querySnapshot) {
            let arrTemp2 = [];
            querySnapshot.forEach(function(doc) {
                arrTemp.push(doc.data());
            });
            currentComponent.setState({ programData: arrTemp2 });
        });
      }

render(){
    let isPaid = this.state.traceList.filter(num=> num.isGetPaid).length;
    return(
    <div>
        <div className="financeSect">
                <div className="FinanceTraceBoxHD">
                    <span className="tab">תאריך המפגש</span><span className="tab">תכנית</span><span className="tab">שם המורה המלמד</span><span className="tab">סטטוס</span><span  className="tab">שולם לתלמיד</span>
                </div>
                    <AllFinanceaStud programData={this.state.programData} traceList={this.traceList}/>
                <span className="sahac">{isPaid*this.state.programData.cost}</span><span className="sahac">:סה"כ שולם לתלמידים</span>
            </div>
        </div>

       )
    }
}

export default FinanceTrace;