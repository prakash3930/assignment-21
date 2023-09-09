const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// create a salarySchema....
const salarySchema = new Schema({
    department:{
        type: String,
        required: true
    },
    employeeName:{
        type:Number,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
},
{timestamps: true,versionKey: false}
);


// create a salaryModel....
const salaryModel = model('sales',salarySchema);

// exports model...
module.exports = salaryModel;