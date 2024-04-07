const {Schema, model} = require('../connection');

const mySchema  =  new Schema({

    // title:{type: String, required: true},
    name : String,
    email :String,
    password :String,
    role: String,
    createdAt: Date, 
    // Avatar :{type:Number , default : 0},


})

module.exports = model('usercollection',mySchema);