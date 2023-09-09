const salesModel = require("../Models/salesModel");


exports.productSalesRevenue = async(req,res)=>{
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


exports.totalQuantitySold = async(req,res)=>{
    try {
        const QuantitySold = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id : "$product",
                        totalQuantity : {$sum : "$quantity"}
                    }
                }
            ]
        )

        res.status(200).json({status:'success',message:QuantitySold});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
}

exports.topProducts = async(req,res)=>{
    try {
        const topProductsSales = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id : "$product",
                        totalRevenue:{$sum:{$multiply:['$quantity','$price']}}
                    }
                },
                {$sort:{totalRevenue:-1}},
                {$limit:5}
            ]
        )

        res.status(200).json({status:'success',message:topProductsSales});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
}


exports.averagePrice = async(req,res)=>{
    try {
        const averagePrice = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id : 0,
                        avgPrice:{$avg:"$price"}
                    }
                    
                }
            ]
        )

        res.status(200).json({status:'success',message:averagePrice});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
}


exports.revenueByMonthYear = async(req,res)=>{
    try {
        const revenueByMonthYear = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id:{
                            month:{$month:"$createdAt"},
                            year:{$year:"$createdAt"}
                        },
                        totalRevenue:{$sum:{$multiply:['$quantity','$price']}}
                    }
                }
            ]
        )

        res.status(200).json({status:'success',message:revenueByMonthYear});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
}


exports.highestQuantitySold = async(req,res)=>{
    try {
        const highestQuantitySold = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id : "$product",
                        totalQuantity : {$max : "$quantity"}
                    }
                },
                {$sort:{totalQuantity:-1}},
                {$limit:1}
            ]
        )

        res.status(200).json({status:'success',message:highestQuantitySold});

    } catch (err) {
        res.status(200).json({status:"fail",message:err.message});
    }
}