const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));

require('./config/mongoose');
require('./config/routes')(app);
app.listen(8000, ()=>{
    console.log("Listen on 8000")
})