var express = require('express'),
    fruits = require('./routes/fruits'),
    app = express();

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/fruits', fruits.findAll);
app.get('/fruits/:id', fruits.findById);
//app.get('/employees/:id/reports', employees.findReports);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});