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

        },
        login: async (parent, { email, password }) => {

        },
        updateUser: async (parent, args, context) => {

        },
        updateHome: async (parent, args, context) => {

        },
        updateRoom: async (parent, args, context) => {

        },
        addPlant: async (parent, args) => {

        }
    }
}

module.exports = resolvers