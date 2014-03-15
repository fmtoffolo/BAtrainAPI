var parseData = function(ramal, body, callback) {
    var rawObject = body;
    var date = '' + new Date();


    //create object to store train data
    var trainData = {
        line: '',
        ramal: ramal,
        timeStamp: date,
        trainsInCirculation: '',
        formations: []
    };

    //add line name according to line name. change name with spaces so it looks pretty
    switch (ramal) {
        case 'tigre':
            trainData.line = 'mitre';
            break;
        case 'mitre':
            trainData.line = 'mitre';
            break;
        case 'jlsuarez':
            trainData.line = 'mitre';
            trainData.ramal = 'jose leon suarez'
            break;
        case 'moreno':
            trainData.line = 'sarmiento';
            break;
        case 'laplata':
            trainData.line = 'roca';
            trainData.ramal = 'la plata';
            break;
    }

    for (var i = 0; i < rawObject.length; i++) {
        var tempTrainData = {
            destination: '',
            id: rawObject[i].formacion_id,
            latitude: parseFloat(rawObject[i].latitud),
            longitude: parseFloat(rawObject[i].longitud),
            ramal: rawObject[i].ramal,
            speed: parseInt(rawObject[i].velocidad),
            status: rawObject[i].estado_servicio,
            movingStatus: rawObject[i].estado_mov,
            trainID: rawObject[i].tren,
            lineOrden: rawObject[i].orden_ramal
        };

        //acording to ramal number, set correct destination
        switch (rawObject[i].ramal) {
            case 1:
                tempTrainData.destination = 'moreno';
                break;
            case 2:
                tempTrainData.destination = 'once';
                break;
            case 5:
                tempTrainData.destination = 'tigre';
                break;
            case 6:
                tempTrainData.destination = 'retiro';
                break;
            case 7:
                tempTrainData.destination = 'mitre';
                break;
            case 8:
                tempTrainData.destination = 'retiro';
                break;
            case 9:
                tempTrainData.destination = 'jose leon suarez';
                break;
            case 10:
                tempTrainData.destination = 'retiro';
                break;
            case 11:
                tempTrainData.destination = 'la plata';
                break;
            case 12:
                tempTrainData.destination = 'consitucion';
                break;
        }

        trainData.formations.push(tempTrainData);
    }

    trainData.trainsInCirculation = trainData.formations.length;

    callback(null, trainData);

};

exports.parseNow = parseData;