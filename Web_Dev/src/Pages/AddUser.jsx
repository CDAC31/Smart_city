import React, { useState } from 'react';
import './Layout/add.css';
import {useNavigate} from 'react-router-dom';//for redirecting the current page to somewhere else
import axios from 'axios';

export default function AddUser() {

  let navi = useNavigate();

  const changeroute = ()=>{
    let path = "/";
    navi(path);
  }

  const init = {
    name : "",
    username : "",
    id : "",
    email : "",
    phone : ""
  }

  const [user,setuser] = useState(init);
  const {id,email,name,phone,username} = user;

  const onValueChange = (e)=>{
    setuser({...user, [e.target.name]: e.target.value })//function to set user with inputed values...
    console.log(user);
  }

  const adduserdet = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3003/user", user);//addusers will p;ost all the user data entered by user...
    changeroute();
    alert("User Data Has Been Added Successfully!")
  }

  return (
    <form onSubmit={(e)=> adduserdet(e)}>Add User
  <div className="mb-3">
  <input
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      onChange = {(e)=> onValueChange}
     className="form-control"
      placeholder="Enter Id"
      onChange = {(e)=> onValueChange(e)}
       name = "id" />
  </div>
  <div className="mb-3">
    <input type="text"
     className="form-control"
      placeholder='Enter Name'
       onChange = {(e)=> onValueChange(e)}
        name="name"/>
  </div>
  <div className="mb-3">
    <input type="text"
     className="form-control"
     placeholder='Enter Username'
     onChange = {(e)=> onValueChange(e)}
      name="username"/>
  </div>
  <div className="mb-3">
    <input type="email"
     className="form-control"
     placeholder='Enter Email Address'
     onChange = {(e)=> onValueChange(e)}
      name="email"/>
  </div>
  <div className="mb-3">
  <input
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     className="form-control"
      placeholder="Enter Phone no"
      onChange = {(e)=> onValueChange(e)}
       name="phone"/>
  </div>
  <button type="submit"
   className="btn btn-primary" >Submit</button>
</form>
  )
}
