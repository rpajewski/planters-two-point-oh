const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
        trim: true
    },
    // (1) direct sunlight, (2) partly sunny, (3) low sunlight
    lightLevel: {
        type: Number,
        required: true
    },
    plants: {
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }
})

const Room = model('Room', roomSchema)

module.exports = Room