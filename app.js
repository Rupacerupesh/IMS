const express = require('express');
const app = express();
const morgan = require('morgan');
const apiRoutes = require('./controllers/api.route')


require('./db');




app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.get('/', function(req, res) {
    res.send('IMS')
});

app.use('/api', apiRoutes)


app.use(function(req,res,next){
	next({
        msg: 'Not Found',
        status: 404
    });
})

app.use(function(err,req,res,next){
	res.status(err.status || 400);
    res.json({
        message: err.msg || err,
        status: err.status || 400,
    });
})


app.listen('9000', function(err,done){
	if(err){
		console.log('Cant create server');
		return;
	}
	console.log('Server started');

})

