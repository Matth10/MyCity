// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  event: (where?: EventWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  event: (where: EventWhereUniqueInput) => EventPromise;
  events: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Event>;
  eventsConnection: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => EventConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (
    args: { data: EventUpdateInput; where: EventWhereUniqueInput }
  ) => EventPromise;
  updateManyEvents: (
    args: { data: EventUpdateManyMutationInput; where?: EventWhereInput }
  ) => BatchPayloadPromise;
  upsertEvent: (
    args: {
      where: EventWhereUniqueInput;
      create: EventCreateInput;
      update: EventUpdateInput;
    }
  ) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EventOrderByInput =
  | "_id_ASC"
  | "_id_DESC"
  | "nom_ASC"
  | "nom_DESC"
  | "image_ASC"
  | "image_DESC"
  | "informations_ASC"
  | "informations_DESC"
  | "description_ASC"
  | "description_DESC"
  | "nbpersonnes_ASC"
  | "nbpersonnes_DESC"
  | "nbPersonInscrit_ASC"
  | "nbPersonInscrit_DESC"
  | "organisateur_ASC"
  | "organisateur_DESC"
  | "date_ASC"
  | "date_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface EventCreateInput {
  nom?: String;
  image?: String;
  informations?: String;
  description?: String;
  nbpersonnes?: Int;
  nbPersonInscrit?: Int;
  organisateur?: String;
  date?: String;
  participants?: EventCreateparticipantsInput;
}

export interface EventCreateparticipantsInput {
  set?: String[] | String;
}

export interface EventUpdateInput {
  nom?: String;
  image?: String;
  informations?: String;
  description?: String;
  nbpersonnes?: Int;
  nbPersonInscrit?: Int;
  organisateur?: String;
  date?: String;
  participants?: EventUpdateparticipantsInput;
}

export interface EventUpdateparticipantsInput {
  set?: String[] | String;
}

export interface EventWhereInput {
  _id?: ID_Input;
  _id_not?: ID_Input;
  _id_in?: ID_Input[] | ID_Input;
  _id_not_in?: ID_Input[] | ID_Input;
  _id_lt?: ID_Input;
  _id_lte?: ID_Input;
  _id_gt?: ID_Input;
  _id_gte?: ID_Input;
  _id_contains?: ID_Input;
  _id_not_contains?: ID_Input;
  _id_starts_with?: ID_Input;
  _id_not_starts_with?: ID_Input;
  _id_ends_with?: ID_Input;
  _id_not_ends_with?: ID_Input;
  nom?: String;
  nom_not?: String;
  nom_in?: String[] | String;
  nom_not_in?: String[] | String;
  nom_lt?: String;
  nom_lte?: String;
  nom_gt?: String;
  nom_gte?: String;
  nom_contains?: String;
  nom_not_contains?: String;
  nom_starts_with?: String;
  nom_not_starts_with?: String;
  nom_ends_with?: String;
  nom_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  informations?: String;
  informations_not?: String;
  informations_in?: String[] | String;
  informations_not_in?: String[] | String;
  informations_lt?: String;
  informations_lte?: String;
  informations_gt?: String;
  informations_gte?: String;
  informations_contains?: String;
  informations_not_contains?: String;
  informations_starts_with?: String;
  informations_not_starts_with?: String;
  informations_ends_with?: String;
  informations_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  nbpersonnes?: Int;
  nbpersonnes_not?: Int;
  nbpersonnes_in?: Int[] | Int;
  nbpersonnes_not_in?: Int[] | Int;
  nbpersonnes_lt?: Int;
  nbpersonnes_lte?: Int;
  nbpersonnes_gt?: Int;
  nbpersonnes_gte?: Int;
  nbPersonInscrit?: Int;
  nbPersonInscrit_not?: Int;
  nbPersonInscrit_in?: Int[] | Int;
  nbPersonInscrit_not_in?: Int[] | Int;
  nbPersonInscrit_lt?: Int;
  nbPersonInscrit_lte?: Int;
  nbPersonInscrit_gt?: Int;
  nbPersonInscrit_gte?: Int;
  organisateur?: String;
  organisateur_not?: String;
  organisateur_in?: String[] | String;
  organisateur_not_in?: String[] | String;
  organisateur_lt?: String;
  organisateur_lte?: String;
  organisateur_gt?: String;
  organisateur_gte?: String;
  organisateur_contains?: String;
  organisateur_not_contains?: String;
  organisateur_starts_with?: String;
  organisateur_not_starts_with?: String;
  organisateur_ends_with?: String;
  organisateur_not_ends_with?: String;
  date?: String;
  date_not?: String;
  date_in?: String[] | String;
  date_not_in?: String[] | String;
  date_lt?: String;
  date_lte?: String;
  date_gt?: String;
  date_gte?: String;
  date_contains?: String;
  date_not_contains?: String;
  date_starts_with?: String;
  date_not_starts_with?: String;
  date_ends_with?: String;
  date_not_ends_with?: String;
  AND?: EventWhereInput[] | EventWhereInput;
  OR?: EventWhereInput[] | EventWhereInput;
  NOT?: EventWhereInput[] | EventWhereInput;
}

export interface EventUpdateManyMutationInput {
  nom?: String;
  image?: String;
  informations?: String;
  description?: String;
  nbpersonnes?: Int;
  nbPersonInscrit?: Int;
  organisateur?: String;
  date?: String;
  participants?: EventUpdateparticipantsInput;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EventWhereInput;
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
}

export type EventWhereUniqueInput = AtLeastOne<{
  _id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface EventPreviousValues {
  _id: ID_Output;
  nom?: String;
  image?: String;
  informations?: String;
  description?: String;
  nbpersonnes?: Int;
  nbPersonInscrit?: Int;
  organisateur?: String;
  date?: String;
  participants: String[];
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  nom: () => Promise<String>;
  image: () => Promise<String>;
  informations: () => Promise<String>;
  description: () => Promise<String>;
  nbpersonnes: () => Promise<Int>;
  nbPersonInscrit: () => Promise<Int>;
  organisateur: () => Promise<String>;
  date: () => Promise<String>;
  participants: () => Promise<String[]>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  nom: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  informations: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  nbpersonnes: () => Promise<AsyncIterator<Int>>;
  nbPersonInscrit: () => Promise<AsyncIterator<Int>>;
  organisateur: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<String>>;
  participants: () => Promise<AsyncIterator<String[]>>;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EventEdge {
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface Event {
  _id: ID_Output;
  nom?: String;
  image?: String;
  informations?: String;
  description?: String;
  nbpersonnes?: Int;
  nbPersonInscrit?: Int;
  organisateur?: String;
  date?: String;
  participants: String[];
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  _id: () => Promise<ID_Output>;
  nom: () => Promise<String>;
  image: () => Promise<String>;
  informations: () => Promise<String>;
  description: () => Promise<String>;
  nbpersonnes: () => Promise<Int>;
  nbPersonInscrit: () => Promise<Int>;
  organisateur: () => Promise<String>;
  date: () => Promise<String>;
  participants: () => Promise<String[]>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  nom: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  informations: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  nbpersonnes: () => Promise<AsyncIterator<Int>>;
  nbPersonInscrit: () => Promise<AsyncIterator<Int>>;
  organisateur: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<String>>;
  participants: () => Promise<AsyncIterator<String[]>>;
}

export interface EventConnection {}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Event",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
