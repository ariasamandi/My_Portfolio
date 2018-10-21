const Controller = require('./../controllers/controller');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/index', Controller.index);
    
}