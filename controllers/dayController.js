var db = require("../models");

module.exports ={
    getDays: (req, res)=> {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Day.findAll({
          where: {UserId:req.params.id},
          include: [db.User]
        }).then(days=> {
          res.json(days);
        });
    },
    createDay: (req, res)=> {
        console.log(req.body)
        db.Day.create({dayName: req.body.dayName, weekDay: req.body.weekDay, UserId: req.params.id}).then(day=> {
            res.json(day);
        });
    },
    updateDay: (req, res)=> {
        db.Day.update(req.body, {
            where:{id: req.body.id}
        }).then(day=> {
            res.json(day)
        })
    },


    getDates: (req, res)=>{
        db.Date.findAll({
            where: {DayId: req.params.id},
            include:[db.Day]
        }).then(dates=> {
            res.json(dates);
        })
    },
    createDate: (req, res)=>{
        let date = new Date(req.body.year, req.body.monthIndex, req.body.date)
        db.Date.create({date:date, DayId: req.params.id}).then(date=>{
            res.json(date);
        })
    },
    

    getExercises: (req,res)=> {
        db.Exercise.findAll({
            where:{DateId: req.params.id},
            include:[db.Date]
        }).then(exercises=>{
            res.json(exercises);
        })
    },
    createExercise: (req, res)=>{
        db.Exercise.create({
            DateId: req.params.id,
            title: req.body.title,
            sets: req.body.sets,
            reps: req.body.reps,
            weight: req.body.weight,
            difficulty: req.body.difficulty,
            note: req.body.note
        }).then(exercise=>{
            res.json(exercise);
        })
    },
    updateExercise: (req, res)=>{
        db.Exercise.update(req.body, {
            where:{id: req.body.id}
        }).then(exercise=>{
            res.json(exercise);
        })
    }
}