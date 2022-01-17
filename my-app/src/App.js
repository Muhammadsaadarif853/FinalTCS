import './App.css';
import Header from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Home from './components/home'
import Head from './components/head';
import Admin from './components/admin';
import Teacher from './components/teacher';
import Student from './components/Student';
import Result from './components/result'
import DisplayResult from './components/DisplayResult';
import { Routes ,Route } from 'react-router-dom';
import DeleteAssignment from './components/DeleteAssignment';
import ClassDetails from './components/ClassDetails';
import AddClass from './components/AddClass';
import axios from 'axios'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/head">
            <Head />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route>
          <Route exact path="/student">
            <Student />
          </Route>
          <Route exact path="/head/result/class">
            <Result />
          </Route>
          <Route exact path="/head/result/class/classid">
            <DisplayResult />
          </Route>
          <Route exact path="/admin/class">
            <ClassDetails />
          </Route>
          <Route exact path="/teacher/class">
            <AddClass />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
