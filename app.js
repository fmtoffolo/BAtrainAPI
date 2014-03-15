var express = require('express');

var app = express();

require('./routes/main.js')(app);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});