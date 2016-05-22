var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/bonita', function(req, res) {
	res.json({ message: 'Great! you set up your api and it works'});
});

router.get('/bonita/access', function(req, res){
	res.json({acessToken: '26897616.1677ed0.f01b340553fd46229f77975cda6829aa',
		clientId: '712ffcef7bdc4c08bad87e4427553541',
		userId: 26897616})
})

app.use('/api', router);
// app.use(function (req, res, next) {
//   if (req.ip !== '127.0.0.1') { // Wrong IP address
//     res.status(401);
//     return res.send('Permission denied');
//   }
//   else{
//   	res.status(200);
//   	return res.send('access granted');
//   }
//   next(); // correct IP address, continue middleware chain
// });

app.listen(port);
console.log('Magic happens on port ' + port);