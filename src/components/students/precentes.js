import React, { Component } from 'react';
import './mainCard.css';





class Precentes extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            mevukash: props.numOfMevukash,
            mifgash:props.numOfMifgash,

        };
    
      }

render(){
    const precent = ((this.state.mevukash/this.state.mifgash)*100).toFixed(2);
    let precColor = {
        color: ''
    };
        if(precent>80){
            precColor.color = 'green';
        }
        else if(precent<80 && precent>50) {
            precColor.color  = 'orange';
        }
        else {
            precColor.color  = 'red';
        }
    

        return(
        <div className="prec" style={precColor} >
        {precent}%
         </div>
     )
 }
 
}

export default Precentes;