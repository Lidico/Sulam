import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavList from './navList';
import './mainCard.css';
import profPic from './pic.jpg';
import firebase from '../../FireBase/FireStore'; 





class mainCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student:props.student,
            tracing: false,
            academyDetailsView: false,
            familyDetailsView: false,
            personalDetailsView:true,
            financeTrace: false,
            endRaedFromData:false
        };
    
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {

        if(this.props.match == undefined)
            return;


        const db = firebase.firestore();
        const ref = db.collection("listOfStudents").doc(this.props.match.params.id);
         ref.get().then(doc => {
             if (doc.exists) {
                  const student = doc.data();
                  this.setState({student:student,endRaedFromData:true })  
             } else {
                 console.log("No such document!");
             }
         }).catch(error => {
             console.log("Error getting document:", error); 
         }); 
    }

      handleChange(e) {
        this.setState({academyDetailsView : false,familyDetailsView :false,personalDetailsView:false, tracing:false, financeTrace:false})
        this.setState({[e.target.name]: true});
      }

      render(){
        let myProps={};
        if(this.props.student != undefined)
            myProps={student:this.props.student,fName:this.props.student.fName,sName: this.props.student.sName,kita:this.props.student.kita,school:this.props.student.school,imgUrl:this.props.student.imgUrl}
        else if(this.state.endRaedFromData)
            myProps={student:this.state.student,fName:this.state.student.fName,sName: this.state.student.sName,kita:this.state.student.kita,school:this.state.student.school,imgUrl:this.state.student.imgUrl}
        else
            return null;
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox">
                        <span className="headerTextPrimary">{myProps.fName} {myProps.sName}</span>
                        <span className="headerTextSub">בית ספר: {myProps.school}  כיתה: {myProps.kita}</span>
                    </div>
                    <img src={myProps.imgUrl} alt="" className="profImage"/>
                </div>
            </div>
            <NavList student={myProps.student} financeTrace={this.state.financeTrace} tracing={this.state.tracing} academyDetailsView={this.state.academyDetailsView} familyDetailsView={this.state.familyDetailsView} personalDetailsView={this.state.personalDetailsView} onClick={this.handleChange}/>
        </div>

        );
      }
    }
export default mainCard;