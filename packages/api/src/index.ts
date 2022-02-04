import { ApolloServer, gql } from 'apollo-server'
import { Source } from 'graphql'
import { Putzplan } from 'putzplan'
//import type { SchemaDefinitionNode } from 'graphql';
//import typeDefs from './schema.graphql'

const typeDefs = gql`
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
`

const resolvers = {
  Query: {
    getMate: (parent: Source, args: { id: String }) => {
      console.log('getMate:', args.id, parent)
      return {
        name: 'helmut' + args.id,
        id: args.id
      }
    },
    getTask: (parent: Source, id: String) => {
      return {
        name: 'kueche',
        id: 'hoho'
      }
    }
  },
  Mutation: {
    addMate: (parent: Source, name: String) => {
      console.log('addMate', name)
      return {
        name: 'helmut',
        id: 'gaga'
      }
    },
    addTask: (parent: Source, name: String) => {
      return {
        name: 'kueche',
        id: 'hoho'
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});