const salesModel = require('../Models/salesModel');

exports.productCreate = async(req,res)=>{
    try {
        const{product,price,quantity}=req.body;
        const products = await new salesModel({product,quantity,price}).save();

        res.status(200).json({status:'success',message:products});
    } catch (err) {
    res.status(200).json({status:'fail',message:err.message});
    }
};