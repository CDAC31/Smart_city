const mongoose = require('mongoose');

const userschema = new mongoose.Schema({ //To define the schema
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    job: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users", userschema); //to to apply the schema

module.exports = users;