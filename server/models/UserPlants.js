const { Schema, model } = require('mongoose')

const userPlantSchema = new Schema({
    plant_id: {
        type: Schema.Types.ObjectId,
        ref: 'Plant',
        required: false
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: false
    }
})

const UserPlants = model('UserPlants', userPlantSchema)

module.exports = UserPlants