var trainData = require('../my_modules/trainData');
var parseData = require('../my_modules/parseData');

module.exports = function(app) {
    app.get('/:ramal', function(req, res) {
        trainData.getTrainData(req.params.ramal, function(err, ramal, body) {

            if (!err) {
                console.log('got data ' + ramal);
                parseData.parseNow(ramal, body, function(err, body) {
                    if (!err) {
                        res.jsonp(body);
                    } else {
                        res.json(err.message);
                    }
                });
            } else {
                res.json(err.message);
            }

        });
    });
    app.get('/', function(req, res) {
        res.json('Invalid query. Please try: "laplata", "tigre", "mitre", "jlsuarez" or "moreno"')
    })
};