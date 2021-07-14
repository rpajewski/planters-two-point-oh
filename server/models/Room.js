const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    roomName: {
        type: String,
        require: true,
        trim: true
    },
    // (1) direct sunlight, (2) partly sunny, (3) low sunlight
    lightLevel: {
        type: Number,
        require: true
    }
})

const Room = model('Room', roomSchema)

module.exports = Room