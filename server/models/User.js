const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const Room = require('./Room')
const UserPlants = require('./UserPlants')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(e) {
                return /.+@.+\..+/.test(e)
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'Please enter an email address']
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
    home: {
        type: String,
        required: false,
        default: 'My Home'
    },
    rooms: [ Room.schema ],
    plants: [ UserPlants.schema ]
})

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User