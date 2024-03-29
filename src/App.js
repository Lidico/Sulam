import { BrowserRouter, Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import NavBar from './components/layOut/navbar';
import Dashboard from './components/dashboard/dashboard';
import listPage from './components/listPages/listPage';
import { Button } from 'react-bootstrap';
import navList from './components/students/navList';
import SignIn from "./components/auth/signIn";
import MainCard from "./components/students/mainCard";
import AddNewStud from "./components/forms/addNewStud";
import AddNewSchool from "./components/forms/addNewSchool";
import AddNewMiktzua from "./components/forms/addNewMiktzua";
import AddNewSulamTeacher from "./components/forms/addNewSulamTeacher"
import TeachersDeatails from "./components/sulamTeachers/teachersDetails";
import AddNewProg from "./components/forms/addNewProg";
import SulamTeachers from "./components/sulamTeachers/sulamTeachers";
import Schools from "./components/school/schools";
import SchoolDetails from "./components/school/schoolDetails";
import Footer from "./components/layOut/footer";

class App extends Component {
  
  render() {
      return (
        <BrowserRouter>
        <div>
          <NavBar/>
        </div>
        <Switch>
            <Route path = '/' exact component={Dashboard}/>
            <Route path = '/dashboard' exact component={Dashboard}/>
            <Route path = '/AddNewStud' exact component={AddNewStud}/>
            <Route path = '/AddNewSchool' exact component={AddNewSchool}/>
            <Route path = '/AddNewMiktzua' exact component={AddNewMiktzua}/>
            <Route path = '/AddNewSulamTeacher' exact component={AddNewSulamTeacher}/>
            <Route path = '/signin' exact component={SignIn}/>
            <Route path = '/listPage' exact component={listPage}/>
            <Route path = '/TeachersDeatails/:id' exact component={TeachersDeatails}/>
            <Route path = '/SchoolDetails/:id' exact component={SchoolDetails}/>
            <Route path = '/AddNewProg' exact component={AddNewProg}/>
            <Route path = '/Schools' exact component={Schools}/>
            <Route path = '/SulamTeachers' exact component={SulamTeachers}/>
            <Route path = '/MainCard/:id' exact component={MainCard}/>
        </Switch>
        {/*<Footer/>*/}
        </BrowserRouter>
    );
  }
}

export default App;

