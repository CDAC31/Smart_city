import React, { useEffect, useState } from 'react';
import './Layout/Table.css'
import axios from 'axios';

export default function User() {


  const [users,setusers] = useState([])//users is just a variable which will hold the elements carried from the empty array in usestate and setusers is a function which can change the values in the users...Returns a stateful value, and a function to update it.

    useEffect(()=>{//to run the getAllUsers() only once...
      getAllUsers();
    },[])

    const getAllUsers = async()=>{
     const resp =  await axios.get("http://localhost:3003/user");
     console.log(resp.data);
     setusers(resp.data);//setusers will set the users data from data.json...
    }
  
  return (
    <table className ="table">
  <thead>
    <tr>
      <th scope="col">Srno</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,srno)=>(
        <tr>
          <th scope='row'>{srno+1}</th>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
          <button  id='edit' >Edit</button>
          <button  id='delete'>Delete</button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
  )
}

