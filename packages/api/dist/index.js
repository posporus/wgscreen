"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
//import type { SchemaDefinitionNode } from 'graphql';
//import typeDefs from './schema.graphql'
const typeDefs = (0, apollo_server_1.gql) `
  type Flat {
    name:String
    id:String
    mates:[Mate]
    tasks:[Task]
}

type Mate {
    name:String
    id:String
    flat:Flat
}

type Task {
    name:String
    id:String

}
type MateTaskRelationship {
    taskId:String
    mateId:String
}

type Mutation {
    addMate(name:String): Mate
    addTask(name:String):Task   
}

type Query {
    getTask(id:String): Task
    getMate(id:String): Mate
}
`;
const resolvers = {
    Query: {
        getMate: (id) => {
            console.log('getMate:', id);
            return {
                name: 'helmut' + id,
                id: id
            };
        },
        getTask: (id) => {
            return {
                name: 'kueche',
                id: 'hoho'
            };
        }
    },
    Mutation: {
        addMate: (name) => {
            return {
                name: 'helmut',
                id: 'gaga'
            };
        },
        addTask: (name) => {
            return {
                name: 'kueche',
                id: 'hoho'
            };
        }
    }
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map