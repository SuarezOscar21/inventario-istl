const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://inventarioISTL:12345@cluster0.70dos.mongodb.net/inventario?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('conected to Mongo'))
    .catch(err => console.error(err)); 
/*mongoose.connect('mongodb://localhost:27017/Inventario')
    .then(db => console.log('conected to Mongo'))
    .catch(err => console.error(err));;
*/
module.exports=mongoose