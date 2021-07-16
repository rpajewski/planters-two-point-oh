const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        home: {
            _id: ID
            name: String
            rooms: {
                _id: ID
                roomName: String
                lightLevel: Number
                plants: {
                    _id: ID
                    commonName: String
                    scientificName: String
                    image_url: String
                    description: String
                    careLevel: Number
                    toxicity: Boolean
                    lightLevel: Number
                    waterReq: Number
                }
            }
        }
    }

    type Plant {
        _id: ID
        commonName: String
        scientificName: String
        image_url: String
        descirption: String
        careLevel: Number
        toxicity: Boolean
        lightLevel: Number
        waterReq: Number
    }

    type Home {
        _id: ID
        name: String
        rooms: {
            _id: ID
            roomName: String
            lightLevel: Number
            plants: {
                _id: ID
                commonName: String
                scientificName: String
                image_url: String
                description: String
                careLevel: Number
                toxicity: Boolean
                lightLevel: Number
                waterReq: Number
            }
        }
    }

    type Room {
        _id: ID
        roomName: String
        lightLevel: Number
        plants: {
            _id: ID
            commonName: String
            scientificName: String
            image_url: String
            descirption: String
            careLevel: Number
            toxicity: Boolean
            lightLevel: Number
            waterReq: Number
        }
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
        lightLevel: Number
    }

    input PlantInput {
        _id: ID
        commonName: String
        scientificName: String
        image_url: String
        descirption: String
        careLevel: Number
        toxicity: Boolean
        lightLevel: Number
        waterReq: Number
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
        updateHome(name: String, rooms: RoomInput): Home
        updateRoom(roomName: String, lightLevel: Number, plants: PlantInput): Room
    }
`

module.exports = typeDefs