import React, { useState } from 'react';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function User() {

  const [user, setuser] = useState([]);

  const getdata = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
      alert("error");
    } else {
      setuser(data);
      console.log("getdata has been sucessful!")
    }
  }

  useEffect(() => getdata(), []);

  const navigate = useNavigate();

  const deleteuser = async(id)=>{
    const resz = await fetch(`/deleteuser/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await resz.json();

    if (resz.status === 422 || !deletedata){
      console.log("error")
    }else{
      console.log("user data has been successfully deleted!");
      getdata();//to get the after deleted data...
    }
  }

  return (
    <div className='mt-10'>
      <div className="container">
        <div className="add_btn mt-5">
          <NavLink to={"/adduser"} type="button" className="btn btn-dark">Add User</NavLink>
        </div>
        <table className="table ">
          <thead>
            <tr className='table-secondary'>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id+1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.job}</td>
                      <td>{element.phone}</td>
                      <td className='d-flex justify-content-between'>
                        <NavLink to={`detail/${element._id}`}><button className='btn btn-primary'><VisibilityTwoToneIcon /></button></NavLink>
                        <NavLink to={`edituser/${element._id}`}><button className='btn btn-dark'><ModeEditTwoToneIcon /></button></NavLink>
                        <button className='btn btn-danger' onClick={()=>deleteuser(element._id)}><DeleteTwoToneIcon /></button>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

