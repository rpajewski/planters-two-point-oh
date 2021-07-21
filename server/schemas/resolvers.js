const { AuthenticationError } = require('apollo-server-express')
const { User, Home, Room, Plant } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData
            }
            throw new AuthenticationError('Not logged in!')
        },
        users: async () => {
            return await User.find()
                .select('-__v -password')
        },
        plant: async (parent, args, context) => {
            if (context.plant) {
                const plantData = await Plant.findById(args.plantId)

                return plantData
            }
        },
        plants: async (parent, args, context) => {
            if (context.plants) {
                return await Plant.find()
            } 
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user}
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials!')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials!')
            }

            const token = signToken(user)

            return { token, user }
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true })
            }
            throw new AuthenticationError('Not logged in!')
        },
        updateHome: async (parent, args, context) => {
            if (context.home) {
                return await Home.findByIdAndUpdate(context.home._id, args, { new: true })
            }
            throw new AuthenticationError('Not logged in!')
        },
        updateRoom: async (parent, args, context) => {
            if (context.room) {
                return await Room.findByIdAndUpdate(context.room._id, args, { new: true })
            }
            throw new AuthenticationError('Not logged in!')
        },
        addPlant: async (parent, args) => {
            const plant = await Plant.create(args)

            return plant
        }
    }
}

module.exports = resolvers