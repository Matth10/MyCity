/**
 * Imports
 */
const graphql = require('graphql-yoga');
const { prisma } = require('./prisma/generated/prisma-client');

/**
 * Resolvers
 */
const resolvers = {
  Query: {
    events: (root, args, context, info) => {
      return context.prisma.events();
    },
    event: (parent, args) => {
      return context.prisma.event({ _id: args._id });
    },
  },
  Mutation: {
    createEvent: (parent, args, context, info) => {
      return context.prisma.createEvent({
        nom: args.nom,
        informations: args.informations,
        description: args.description,
        nbpersonnes: args.nbpersonnes,
        nbPersonInscrit: args.nbPersonInscrit,
        organisateur: args.organisateur,
        date: args.date,
        participants: args.participants,
      });
    },
  },
  Event: {
    _id: parent => parent._id,
    nom: parent => parent.nom,
    image: parent => parent.image,
    informations: parent => parent.informations,
    description: parent => parent.description,
    nbpersonnes: parent => parent.nbpersonnes,
    nbPersonInscrit: parent => parent.nbPersonInscrit,
    organisateur: parent => parent.organisateur,
    date: parent => parent.date,
    participants: parent => parent.participants,
  },
};

/**
 * Set up the server
 */
const server = new graphql.GraphQLServer({
  typeDefs: './graphql/schema.graphql',
  resolvers,
  context: { prisma },
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});
