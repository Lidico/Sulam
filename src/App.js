import { BrowserRouter, Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import NavBar from './components/layOut/navbar';
import Dashboard from './components/dashboard/dashboard';
import signIn from './components/auth/signIn';
import listPage from './components/listPages/listPage';
import { Button } from 'react-bootstrap';
import navList from './components/students/navList';
import SignIn from "./components/auth/signIn";
import MainCard from "./components/students/mainCard";
import AddNewStud from "./components/forms/addNewStud";
import AddNewSchool from "./components/forms/addNewSchool";
import AddNewMiktzua from "./components/forms/addNewMiktzua";


class App extends Component {
  render() {
      return (
        <BrowserRouter>
        <div>
          <NavBar/>
        </div>
        <Switch>
            <Route path = '/' exact component={SignIn}/>
            <Route path = '/AddNewStud' exact component={AddNewStud}/>
            <Route path = '/AddNewMiktzua' exact component={AddNewMiktzua}/>
        </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

