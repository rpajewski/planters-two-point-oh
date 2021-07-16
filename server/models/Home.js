const { Schema, model } = require('mongoose')

const homeSchema = new Schema({
    name: {
        type: String,
        required: false,
        default: 'My Home'
    },
    rooms: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
})

const Home = model('Home', homeSchema)

module.exports = Home