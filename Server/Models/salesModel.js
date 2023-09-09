const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// create a salesSchema....
const salesSchema = new Schema({
    product:{
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
},
{timestamps: true,versionKey: false}
);


// create a salesModel....
const salesModel = model('sales',salesSchema);

// exports model...
module.exports = salesModel;