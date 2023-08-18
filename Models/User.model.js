const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,


    },
    password: {
        type: String,
        required: true,

    }
})

const User = mongoose.model('user',UserSchema)
module.exports = User
