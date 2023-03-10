var express = require('express');
var app = express();

var things = require('./things.js');
// var middleware = require('./middleware.js');
// // app.get('/hello', function(req, res){
// //    res.send("Hello World!");
// // });

// // app.post('/hello', function(req, res){
// //    res.send("You just called the post method at '/hello'!\n");
// // });
// // app.all('/test', function(req, res){
// //     res.send("HTTP method doesn't have any effect on this route!");
// //  });

 
//  //both index.js and things.js should be in same directory
// //  var things = require('./things.js');
//  app.use('/things', things);
//  app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });
//  app.get('/things/:name/:id', function(req, res) {
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
//  });
//  app.use('/middleware',middleware);
 
// // app.use('/things',things);
// // app.get('/:id',function(req,res)
// // {
// //     res.send('The id you specified is' +req.params.id);
// // });
// // app.get('/things/:name/:id',function(req ,res)
// // {
// //   res.send('id: '+req.params.id +' and name:' +req.params.name);
// // });
// //  //First middleware before response is sent
// // app.use(function(req, res, next){
// //     res.send("Start");
// //     next();
// //  });
 
// //  //Route handler
// //  app.get('/', function(req, res, next){
// //     res.send("Middle");
// //     next();
// //  });
 
//  app.use('/', function(req, res){
//     console.log('End');
//  });
// //  app.get('/dynamic_view', function(req, res){
// //     res.render('dynamic', {
// //        name: "TutorialsPoint", 
// //        url:"http://www.tutorialspoint.com"
// //     });
// //  });
 
 
// // app.use(express.static('public'));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

    app.get('/', function(req, res){
       console.log('Cookies: ', req.cookies);
      //   res.cookie('name', 'express').send('cookie set'); //Sets name = express
        //res.cookie('name', 'programming experience', {expire: 360000 + Date.now()});
        res.cookie('name','programming experience', {maxAge: 10000 });
        res.send('cookie set')
        //if delete thecookie
     });
     app.get('/clear',function(req,res){
      res.clearCookie('name');
      res.send('cookie are clear')
     });

// // var express = require('express');
// // var bodyParser = require('body-parser');
// // var multer = require('multer');
// // var upload = multer();
// // const router = express.Router()
// // var app = express();

// // // app.use(cookieparser());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(upload.array());

// // //Require the Router we defined in movies.js
// // var movies = require('./movies.js');

// // //Use the Router on the sub route /movies
// // app.use('/movies', movies);
// // router.get('/', function(req, res){
// //    res.json(movies);
// // });

// // app.get('/error', function(req, res){
// //    //Create an error and pass it to the next function
// //    var err = new Error("Something went wrong");
// //    next(err);
// // });

// // /*
// //  * other route handlers and middleware here
// //  * ....
// //  */

// // //An error handling middleware
// // app.use(function(err, req, res, next) {
// //    res.status(500);
// //    res.send("Oops, something went wrong.")
// // });

// // app.listen(5000);
// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
    
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//     // function route handler.
//     next();

//  });
//  app.listen(5000);


// var express = require('express');
// var app = express();

// app.get('/dynamic_view', function(req, res){
//    res.render('dynamic', {
//       name: "TutorialsPoint", 
//       url:"http://www.tutorialspoint.com"
//    });
// });

app.listen(5000);