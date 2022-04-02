const express = require('express');
const router = express.Router();
const users = require('../Models/userSchema');

router.post("/adduser", async(req, res) => {
    // console.log(req.body);
    const { name, email, age, phone, job, address } = req.body;
    if (!name || !email || !age || !phone || !job || !address) {
        res.status(422).json("Please fill all the data fields");
    }

    try {
        const preuser = await users.findOne({ email: email }); //database email vs user input email

        if (preuser) {
            res.status(422).json("This user is already present")
        } else {
            const addnewuser = new users({
                name,
                email,
                age,
                phone,
                job,
                address
            });
            await addnewuser.save();
            res.status(201).json(addnewuser);
            console.log(addnewuser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
});

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//creating get api to get individual user details...

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const induser = await users.findById({_id:id});
        console.log(induser);
        res.status(201).json(induser);
    } catch (error) {
        res.status(422).json(error);
    }
})

//creating get api to update user details...

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id,(req.body),{
            new:true//new updated value to be final and true...
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
})

//Delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteuser = await users.findByIdAndDelete({_id:id});
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;