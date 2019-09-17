import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './form.css';
import firebase from '../../FireBase/FireStore';    
import { firestore } from 'firebase-admin';
import Miktzua from './miktzua';


class MiktzuaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profsList: props.profs
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }

handleChange(e) {
}


handleRemove(e) {
}

render(){
 
    let ListMiktzua =  this.state.profsList.map((Mikzuut,MikzuaName) =><Miktzua key={MikzuaName} shemToar = {Mikzuut.shemToar} fName = {Mikzuut.fName} sName = {Mikzuut.sName} profName = {Mikzuut.profName} dayOfMifgash = {Mikzuut.dayOfMifgash} hourOfMifgash = {Mikzuut.hourOfMifgash} numOfShaot={Mikzuut.numOfShaot} onRemove={Mikzuut.onRemove}/>)
    if(ListMiktzua.length==0){
        ListMiktzua = <span className="headLinePD"></span>;
    }
        return(
        <div >
              {ListMiktzua}
        </div>

        )
    }
}

export default MiktzuaList;