const mongoose = require('mongoose');
const registrationFormSchema = new mongoose.Schema({
    firstname:{
        type: String,
        trim: true,
    },
    lastname:{
        type: String,
        trim: true,
    },
    date:{
        type: String,
        trim: true,
    },
    gender:{
        type: String,
        trim: true,
    },
    country:{
        type: String,
        trim: true,
    },
    district:{
        type: String,
        
    },
    town:{
        type: String,
        
    },
    zip:{
        type: String,
        
    },
    gender:{
        type: String,
        
    },
    phone1:{
        type: String,
        
    },
    phone2:{
        type: String,
        
    },
    email:{
        type: String,
        
    },

    })
    module.exports = mongoose.model('Registration', registrationFormSchema)