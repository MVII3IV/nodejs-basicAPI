var movieController = function(){

    var get = function(req, res){
        res.send('holi holi');
    }

    return {
        get: get
    }
}

module.exports = movieController;