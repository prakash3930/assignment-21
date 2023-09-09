const salesModel = require("../Models/salesModel");

exports.productSales = async(req,res)=>{
    try {
        const productRevenue = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id:0,
                        totalRevenue:{$sum:{$multiply:['$quantity','$price']}}
                    }
                }
            ]
        )

        res.status(200).json({status:'success',message:productRevenue});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
};