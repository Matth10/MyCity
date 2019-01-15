module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Event {
  _id: ID!
  nom: String
  image: String
  informations: String
  description: String
  nbpersonnes: Int
  organisateur: String
  date: String
  participants: [String!]!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  nom: String
  image: String
  informations: String
  description: String
  nbpersonnes: Int
  organisateur: String
  date: String
  participants: EventCreateparticipantsInput
}

input EventCreateparticipantsInput {
  set: [String!]
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  _id_ASC
  _id_DESC
  nom_ASC
  nom_DESC
  image_ASC
  image_DESC
  informations_ASC
  informations_DESC
  description_ASC
  description_DESC
  nbpersonnes_ASC
  nbpersonnes_DESC
  organisateur_ASC
  organisateur_DESC
  date_ASC
  date_DESC
}

type EventPreviousValues {
  _id: ID!
  nom: String
  image: String
  informations: String
  description: String
  nbpersonnes: Int
  organisateur: String
  date: String
  participants: [String!]!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  nom: String
  image: String
  informations: String
  description: String
  nbpersonnes: Int
  organisateur: String
  date: String
  participants: EventUpdateparticipantsInput
}

input EventUpdateManyMutationInput {
  nom: String
  image: String
  informations: String
  description: String
  nbpersonnes: Int
  organisateur: String
  date: String
  participants: EventUpdateparticipantsInput
}

input EventUpdateparticipantsInput {
  set: [String!]
}

input EventWhereInput {
  _id: ID
  _id_not: ID
  _id_in: [ID!]
  _id_not_in: [ID!]
  _id_lt: ID
  _id_lte: ID
  _id_gt: ID
  _id_gte: ID
  _id_contains: ID
  _id_not_contains: ID
  _id_starts_with: ID
  _id_not_starts_with: ID
  _id_ends_with: ID
  _id_not_ends_with: ID
  nom: String
  nom_not: String
  nom_in: [String!]
  nom_not_in: [String!]
  nom_lt: String
  nom_lte: String
  nom_gt: String
  nom_gte: String
  nom_contains: String
  nom_not_contains: String
  nom_starts_with: String
  nom_not_starts_with: String
  nom_ends_with: String
  nom_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  informations: String
  informations_not: String
  informations_in: [String!]
  informations_not_in: [String!]
  informations_lt: String
  informations_lte: String
  informations_gt: String
  informations_gte: String
  informations_contains: String
  informations_not_contains: String
  informations_starts_with: String
  informations_not_starts_with: String
  informations_ends_with: String
  informations_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  nbpersonnes: Int
  nbpersonnes_not: Int
  nbpersonnes_in: [Int!]
  nbpersonnes_not_in: [Int!]
  nbpersonnes_lt: Int
  nbpersonnes_lte: Int
  nbpersonnes_gt: Int
  nbpersonnes_gte: Int
  organisateur: String
  organisateur_not: String
  organisateur_in: [String!]
  organisateur_not_in: [String!]
  organisateur_lt: String
  organisateur_lte: String
  organisateur_gt: String
  organisateur_gte: String
  organisateur_contains: String
  organisateur_not_contains: String
  organisateur_starts_with: String
  organisateur_not_starts_with: String
  organisateur_ends_with: String
  organisateur_not_ends_with: String
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  _id: ID
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
}
`
      }
    