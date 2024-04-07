const mongoose = require('mongoose');

const url ="mongodb+srv://user:1234@cluster0.l065gdo.mongodb.net/plugit?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(url)


.then((result) => {
    console.log('database connected');

}).catch((err) => {
    console.log(err);
    
});



module.exports= mongoose;