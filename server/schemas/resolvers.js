const { AuthenticationError } = require('apollo-server-express')
const { User, Home, Room, Plant } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {

    },
    Mutation: {

    }
}

module.exports = resolvers