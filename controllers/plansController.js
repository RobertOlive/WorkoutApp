var db = require("../models");

module.exports ={
    doAThing: (req, res)=> {
        console.log("doing a thing");
        res.status(200).json({object:"thing"})
    }
}