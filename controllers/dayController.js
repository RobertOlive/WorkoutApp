var db = require("../models");

module.exports ={
    doAThing: (req, res)=> {
        console.log("doing a thing");
        res.status(200).json({object:"thing"})
    },
    getDays: (req, res)=> {

        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Day.findAll({
          where: {UserId:req.params.id},
        //   include: [db.User]
        }).then(days=> {
          res.json(days);
        });
    },
    createDay: (req, res)=> {
        console.log(req.body)
        db.Day.create({dayName: req.body.dayName, UserId: req.params.id}).then(day=> {
            res.json(day);
        });
    }
}