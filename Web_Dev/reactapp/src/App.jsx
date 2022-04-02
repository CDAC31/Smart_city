import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Pages/Layout/Navbar';
import User from './Pages/User';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Detail from './Pages/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<User/>}/>
            <Route exact path="/user" element={<User/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
            <Route exact path="user/edituser/:id" element={<EditUser/>}/>
            <Route exact path="user/detail/:id" element={<Detail/>}/>
            <Route exact path="/detail/:id" element={<Detail/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
