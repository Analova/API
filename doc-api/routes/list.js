var express = require("express")
var router= express.Router();
var db= require("../models")

// Show all events route
router.get("/", function(req,res){
    db.List.find()
    .then(function(list){
        res.json(list)
    })
    .catch(function(err){
        res.send(err)
    })
  })
 
  // Post route
  router.post("/", function(req,res){
    db.List.create(req.body)
    .then(function(newList){
       res.status(201).json(newList)
    })
    .catch(function(err){
        res.send(err)
    })
  })
  
  // Show one event route
  router.get("/:listId" , function(req,res){
    db.List.findById(req.params.listId)
    .then (function(foundList){
        res.json(foundList)
    })
    .catch(function(err){
       res.send(err)
   })
   })

   // Update  route
   router.put("/:listId" , function(req,res){
    db.List.findOneAndUpdate({_id:req.params.listId}, req.body, {new:true})
    .then(function(list){
        res.json(list)
    })
    .catch(function(err){
     res.send(err)
 })
    })
  

    // Delete route
    router.delete("/:listId" , function(req,res){
        db.List.remove({_id:req.params.listId})
        .then(function(){
            res.json({message: "We deletete it"})
        })
        .catch(function(err){
            res.send(err)
        })
        })
    



module.exports= router;