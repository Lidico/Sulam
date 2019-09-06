import React, { Component } from 'react';
import './form.css';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../FireBase/FireStore';

function ProfSelector(props) {
    let profList = [];
    profList = props.mikzuut;
    return (
      <select className="browser-default"  value={props.value} onChange={props.func} name="profName" dir="rtl">
        {profList.map((object, kEy) => {
          return (
            <option key={kEy} value={object.value}>
              {object}
            </option>
          );
        })}
      </select>
    );
  }

class MiktzuaSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherID: props.teachID,
            techerProfList:[],
        };
      }
    
    componentDidMount() {
        let currentComponent = this;
        let temp;
        const db = firebase.firestore();
        let ref = db.collection("listOfTeachers").doc(this.state.teacherID);
        ref.get().then(function(doc) {
            if (doc.exists) {
                temp = doc.data().TeacherMiktzuaList;
                currentComponent.setState({techerProfList:temp});
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        let currentComponent = this;
        if(nextProps.teachID!=this.state.teacherID){
            let currentComponent = this;
            let temp;
            const db = firebase.firestore();
            let ref = db.collection("listOfTeachers").doc(nextProps.teachID);
            ref.get().then(function(doc) {
                if (doc.exists) {
                    temp = doc.data().TeacherMiktzuaList;
                    console.log(temp);
                    currentComponent.setState({
                        techerProfList:temp,
                        teacherID:nextProps.teachID
                    });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        }
    }

    // handleChange(e) {
    //     this.setState({[e.target.name]: e.target.value});
    // }


    render(){
    
        return(
        <div>
            <ProfSelector
                        value={this.props.profName}
                        func={this.props.onChange}
                        mikzuut={this.state.techerProfList}
           />
        </div>

        )
    }
}
    

export default MiktzuaSelector;