import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Pages/Layout/Navbar';
import User from './components/Pages/User';
import AddUser from './components/Pages/AddUser';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './components/Pages/NotFound';
import EditUser from './components/Pages/EditUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<User/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edituser/:srno" element={<EditUser/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
