import React from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { NavLink,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const {id} = useParams("");

    const [user, setuser] = useState([]);
    console.log(user);

    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
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
            console.log("User data has been get sucessfully!");
        }
    }

    useEffect(()=>{
        getdata();
    },[]);

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
          navigate("/",{replace:true});
        }
    }

    return (
        <div className='container mt-3'>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="row">
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
                            <h3 className='mt-3'>Name : <span>{user.name}</span></h3>
                            <h3 className='mt-3'>Age : <span>{user.age}</span></h3>
                            <p><MailOutlineTwoToneIcon /> : <span>{user.email}</span></p>
                            <p><WorkIcon /> : <span>{user.job}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <div className="add_btn">
                                <NavLink to={`/edituser/${user._id}`}><button className='btn btn-dark mx-2'><ModeEditTwoToneIcon /></button></NavLink>
                                <button onClick={()=>deleteuser(user._id)} className='btn btn-danger mx-2'><DeleteTwoToneIcon /></button>
                            </div>
                            <p className='mt-5'><PhoneAndroidTwoToneIcon /> : <span>{user.phone}</span></p>
                            <p className='mt-3'><LocationOnTwoToneIcon /> : <span>{user.address}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Detail;