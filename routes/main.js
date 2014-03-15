var trainData = require('../my_modules/trainData');
var parseData = require('../my_modules/parseData');

module.exports = function(app) {
    app.get('/:ramal', function(req, res) {
        trainData.getTrainData(req.params.ramal, function(err, ramal, body) {

            if (!err) {
                console.log('got data ' + ramal);
                parseData.parseNow(ramal, body, function(err, body) {
                    if (!err) {
                        res.send(JSON.stringify(body));
                    } else {
                        res.send(JSON.stringify(err.message));
                    }
                });
            } else {
                res.send(JSON.stringify(err.message));
            }

        });
    });
    app.get('/', function(req, res) {
        res.send(JSON.stringify('Invalid query. Please try: "laplata", "tigre", "mitre", "jlsuarez" or "moreno"'))
    })
};