import React from 'react';
import { Link } from 'react-router-dom'
import Chart from 'chart.js';
import Graph from './graph';
import Proff from './proff';


const AcademyDetails = () => {
    return(
     <div>
         <Graph/>
         <Proff/>
    </div>
       
    )
}

export default AcademyDetails;