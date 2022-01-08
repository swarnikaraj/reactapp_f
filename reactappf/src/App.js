import logo from './logo.svg';
import { Path } from 'react-router-dom';
import './App.css';
import {Nav} from './components/navbar'
import {Route, Routes} from "react-router-dom"
import {About} from "./components/about"
import {Contact} from "./components/contact"
import {Home} from "./components/home"
import {Userlist} from "./components/userList"
import { Dashboard } from './components/dashboard';

import {User} from "./components/user"
import {Signup} from "./components/signup"
import {Login} from "./components/login"
import { PrivateRoute } from './components/PrivateRoute';
import {Setting} from "./components/setting"

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/contact" element ={<Contact/>}/>
    <Route path="/about" element ={<About/>}/>
    <Route path="/users/:id" element ={<User/>}></Route>
    <Route path="/users" element ={<Userlist/>}/>

    <Route path="/signup" element ={<Signup/>}/>
    <Route path="/login" element ={<Login/>}/>
    
    <Route path="/dashboard" element={
      <PrivateRoute><Dashboard/></PrivateRoute>
    }></Route>

    <Route path="/dashboard/setting" element={
      <PrivateRoute><Setting/></PrivateRoute>}></Route>


    <Route path="*" element ={<div> 404 Page Not Found</div>}/>
    
    </Routes>

    </div>
  );
}

export default App;
