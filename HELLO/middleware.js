var express = require('express');
var router = express.Router();
// var app = express()
router.get(function(req,res,next){
    res.send("A new request recieved at"+Date.now());
next();
});
router.get(function(req, res, next){
    res.send("Start");
    next();
 });
module.exports = router;