const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Plant {
        _id: ID
        commonName: String
        scientificName: String
        image_url: String
        descirption: String
        careLevel: Int
        toxicity: Boolean
        lightLevel: Int
        waterReq: Int
    }

    type Room {
        _id: ID
        roomName: String
        lightLevel: Int
        plants: [Plant]
    }

    type Home {
        _id: ID
        homeName: String
        rooms: [Room]
    }

    type User {
        _id: ID
        username: String
        email: String
        home: [Home]
    }

    type Auth {
        token: ID
        user: User
    }

    input HomeInput {
        _id: ID
        homeName: String
    }

    input RoomInput {
        _id: ID
        roomName: String
        lightLevel: Int
    }

    input PlantInput {
        _id: ID
    }

    type Query {
        me: User
        users: [User]
        plant(plantId: ID!): Plant
        plants: [Plant]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String, home: HomeInput): User
        updateHome(homeName: String, rooms: RoomInput): Home
        updateRoom(roomName: String, lightLevel: Int, plants: PlantInput): Room
        addPlant(commonName: String!, scientificName: String!, image_url: String!, description: String!, careLevel: Int!, toxicity: Boolean, lightLevel: Int!, waterReq: Int!): Plant
    }
`

module.exports = typeDefs