import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavList from './navList';
import './mainCard.css';
import profPic from './pic.jpg';





class mainCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student:props.student,
            tracing: false,
            academyDetailsView: false,
            familyDetailsView: false,
            personalDetailsView:true
        };
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        this.setState({academyDetailsView : false,familyDetailsView :false,personalDetailsView:false, tracing:false})
        this.setState({[e.target.name]: true});
      }

      render(){
        return(
        <div className="mainBlockCard">
            <div className="nameBlock">
                <div className="nameAndPhoto">
                    <div className="nameBox">
                        <span className="headerTextPrimary">{this.props.student.fName} {this.props.student.sName}</span>
                        <span className="headerTextSub">בית ספר: {this.props.student.school}  כיתה: {this.props.student.kita}</span>
                    </div>
                    <img src={this.props.student.imgUrl} alt="" className="profImage"/>
                </div>
            </div>
            <NavList student={this.props.student} tracing={this.state.tracing} academyDetailsView={this.state.academyDetailsView} familyDetailsView={this.state.familyDetailsView} personalDetailsView={this.state.personalDetailsView} onClick={this.handleChange}/>
        </div>

        );
      }
    }
export default mainCard;