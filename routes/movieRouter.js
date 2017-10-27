var express = require('express');


var route = function(){
    var movieController = require('../controller/movieController')();
    var movieRouter = express.Router();

    movieRouter.route('/')
        .get(movieController.get);
    
    return movieRouter;

}

module.exports = route;