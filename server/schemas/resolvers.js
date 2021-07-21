const { AuthenticationError } = require('apollo-server-express')
const { User, Home, Room, Plant } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {

        },
        users: async () => {

        },
        plant: async (parent, args, context) => {

        },
        plants: async (parent, args, context) => {

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