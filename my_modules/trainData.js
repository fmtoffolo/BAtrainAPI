var request = require('request');


var randomStringGenerator = function() {
    var charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var stringLength = 16;
    var randomString = '';
    for (var i = 0; i < stringLength; i++) {
        var randomChar = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomChar, randomChar + 1);
    }
    return randomString;
};


var getRawData = function(ramal, callback) {
    var key = 'v%23v%23QTUtWp%23MpWRy80Q0knTE10I30kj%23FNyZ';
    var url = 'http://trenes.mininterior.gov.ar/v2_pg/mapas/ajax_posiciones.php?';
    var rnd = randomStringGenerator();
    var queryParams = { //create query parameters object
        rnd: rnd,
        key: key,
        ramal: 0
    };

    var ramalData = [{
        name: 'laplata',
        id: 11
    }, {
        name: 'tigre',
        id: 5
    }, {
        name: 'mitre',
        id: 7
    }, {
        name: 'jlsuarez',
        id: 9
    }, {
        name: 'moreno',
        id: 1
    }];


    //set ramal to corresponding id
    for (var i = 0; i < ramalData.length; i++) {
        if (ramalData[i].name === ramal) {
            queryParams.ramal = ramalData[i].id;
        }
    }

    //if ramal non existant, throw error
    if (queryParams.ramal === 0) {
        callback(new Error('Not a valid line. Please try: "laplata", "tigre", "mitre", "jlsuarez" or "moreno"'));
    } else {
        //make request
        request({
            url: url,
            qs: queryParams
        }, function(error, response, body) {
            console.log('request done');
            if (!error && response.statusCode === 200) {
                callback(null, ramal, JSON.parse(body));
            } else {
                callback(new Error('error message: third party connection error'));
            }
        });
    }
};

exports.getTrainData = getRawData;