const express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
const http = require('http');
const app = express()


app.use(express.static(path.join(__dirname + '/public','favicon.ico')));
app.use(express.static('public'));


app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/', (req, res) => res.render('comingsoon'))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))