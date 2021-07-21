const { Schema, model } = require('mongoose')

const plantSchema = new Schema({
    commonName: {
        type: String,
        required: true,
        trim: true
    },
    scientificName: {
        type: String,
        required: true,
        trim: true
    },
    image_url: {
        type: String,
        validate: { 
            validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL' 
        },
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // (1) easy, (2) moderate, (3) pro
    careLevel: {
        type: Number,
        required: true
    },
    toxicity: {
        type: Boolean,
        required: false,
        default: false
    },
    // (1) direct sunlight, (2) partly sunny, (3) low sunlight
    lightLevel: {
        type: Number,
        required: true
    },
    // (1) water often, (2) moderate water, (3) infrequent watering
    waterReq: {
        type: Number,
        required: true
    }
})

const Plant = model('Plant', plantSchema)

module.exports = Plant