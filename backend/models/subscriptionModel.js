const { Schema, model } = require('../connection');

const mySchema = new Schema({

    email: String,
    createdAt: { type: Date, default: Date.now }


})

module.exports = model('subscription', mySchema);