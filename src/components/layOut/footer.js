import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }


    render(){
    
        return(
            <footer className="footerLid">
            <div className="container">
              <div className="row">
                <div className="col l6 s14">
                  <h5 className="white-text">Sulam LaAtid</h5>
                  <p className="grey-text text-lighten-4">The Sulam L’Atid NGO aims to alleviate economic disadvantage through education. Twenty percent of Israel’s high school 
                  pupils must work at the end of their school day (sometimes as much as 35 hours of work per week) to help support their economically struggling families. To allow
                   these pupils to invest in their future while still contributing to their families’ economically, the Sulam L’Atid NGO offers these pupils a package deal: “Reduce 
                   your after school work schedule, and in return we at the Sulam L’Atid NGO will not only provide you with free tutorials (taught by our corps of volunteers, which 
                   includes retired teachers, attorneys, retired ambassadors, etc.) but we’ll also help support your family with vouchers to buy food and clothing (purchased by donations). 
                   It’s a win win situation created by an NGO that functions at all levels purely through volunteers.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Built by</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/Lidico">Lidor Zaken</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                    <li><h6 className="white-text">Special thanks to:</h6></li>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/piskarovhaim">Haim Piskarov</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/EitanOfCode">Eitan Sternlicht</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2019 Copyright to Lidor Zaken
              <a className="grey-text text-lighten-4 right" href="#!"></a>
              </div>
            </div>
          </footer>   

        )
    }
}
    

export default Footer;

       