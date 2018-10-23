var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
    var listRoutes = require("./routes/list");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.send("Hello form local host")
});


app.use('/api/list', listRoutes);

 app.listen(5000, () => {
    console.log("App is running")
  });