var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('hello wordl');
=======
  res.send('hello wordl');
>>>>>>> 22860f2d8dac4ae393c0aee3f6502818a527d0e2
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
