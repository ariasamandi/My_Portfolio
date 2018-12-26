const Controller = require('./../controllers/controller');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/index', Controller.index);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
    
}