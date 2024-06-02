const { Schema, model } = require('../connection');

const mySchema = new Schema({

    // title:{type: String, required: true},
    fullname: String,
    email: String,
    password: String,
    role: String,
    avatar: { type: String, default: 'default_avatar.png' },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('usercollection', mySchema);