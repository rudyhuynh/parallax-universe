var path = require('path');
var express = require('express');
//var webpack = require('webpack');
//var config = require('./webpack.config.dev');

var app = express();

app.set('port', (process.env.PORT || 5000));
//var compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
app.use(express.static(__dirname+'/static'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
//app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.render('index');
});

app.listen(app.get('port'), 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:'+app.get('port'));
});
