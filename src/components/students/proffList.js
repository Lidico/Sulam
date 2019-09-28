import React, { Component } from 'react';

import './mainCard.css';
import Proff from './proff';


class ProffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proffList: props.mikztuut,
            studentID: props.studentID
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }


handleChange(e) {
}


handleRemove(e) {
}

render(){
 
    let ListProff =  this.state.proffList.map((Prof,ProffKey) => <Proff key={ProffKey} shemToar={Prof.shemToar} fName={Prof.fName} sName={Prof.sName} profName={Prof.profName} teachIMG={Prof.techIMG} dayOfMifgash={Prof.dayOfMifgash} hourOfMifgash={Prof.hourOfMifgash} timeOfMifgash={Prof.numOfShaot} schoolTeacherName={Prof.schoolTeacherName} schoolTeacherPhone={Prof.schoolTeacherPhone} studInTeacherHome={Prof.studInTeacherHome} studentID={this.state.studentID}/>)
    if(ListProff.length==0){
        ListProff = <span className="headLinePD"></span>;
    }
    
        return(
        <div >
              {ListProff} 
        </div>

        )
    }
}

export default ProffList;