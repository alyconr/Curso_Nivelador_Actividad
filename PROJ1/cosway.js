var http = require('http')
var cowsay = require('cowsay')
var express = require('express')
var app = express()
//const cowsay = require('cowsay')

app.get('/cowsay', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/txt');
  res.end(
    cowsay.say({
    text: "Welcome to cowsay Home!",
    e: "oO",
    T: "U "
              })
          );

        });
 
app.get ('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/txt');
  res.end(
    cowsay.say({
    text: "This is the Module's one Activity!",
    e: "oO",
    T: "U "
               })
        );
          });
http.createServer(app).listen(8001, () => {
console.log('Server started at http://localhost:8001');
});