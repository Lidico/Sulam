import React, { Component } from 'react';

import './mainCard.css';
import Proff from './proff';


class ProffList extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            proffList: props.mikztuut
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }


handleChange(e) {
}


handleRemove(e) {
}

render(){
 
    let ListProff =  this.state.proffList.map((Prof,ProffKey) => <Proff key={ProffKey}/>)
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