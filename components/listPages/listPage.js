import React, { Component } from 'react';
import Schools from './schools';
import Program from './program';
import Grade from './grade';
import Student from './students';
import './listPage.css';

class ListPage extends Component {
        render(){
        return(
        <div className="dashboard container mainBlock">
            <div className="row">
                <div className="colSt col s12 m2 offset-m2">
                     <Student/>
                </div>
                <div className="col s12 m2 colSt">
                   <Program/>  
                </div>
                <div className="col s12 m2 colSt">
                     <Grade/>
                </div>
                <div className="col s12 m2 colSt">
                    <Schools/>
                 </div>
            </div>
        </div>

        )
    }
}

export default ListPage;