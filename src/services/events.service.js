import { client } from '../config/init_graphql'
import gql from 'graphql-tag'

/**
 * Funtions
 */
export const fetchEvents = () => {
  return client.query({
    query: gql`
      {
        events {
          _id
          image
          nom
          informations
          description
          nbpersonnes
          organisateur
          date
          participants
        }
      }
    `
  })
}

export const updateParticipantsEvent = (_id_event, participants) => {
  return client.mutate({
    mutation: gql`
      mutation($_id: ID!, $participants: [String]) {
        updateEvent(_id: $_id, participants: $participants) {
          _id
          nom
          image
          informations
          description
          nbpersonnes
          organisateur
          date
          participants
        }
      }
    `,
    variables: { _id: _id_event, participants: participants }
  })
}

export const addEvent = event => {
  console.log(event)
  return client.mutate({
    mutation: gql`
      mutation(
        $nom: String
        $image: String
        $informations: String
        $description: String
        $nbpersonnes: Int
        $organisateur: String
        $date: String
        $participants: [String]
      ) {
        createEvent(
          nom: $nom
          image: $image
          informations: $informations
          description: $description
          nbpersonnes: $nbpersonnes
          organisateur: $organisateur
          date: $date
          participants: $participants
        ) {
          _id
          nom
          image
          informations
          description
          nbpersonnes
          organisateur
          date
          participants
        }
      }
    `,
    variables: {
      nom: event.nom,
      image: event.image,
      informations: event.informations,
      description: event.description,
      nbpersonnes: event.nbpersonnes,
      organisateur: event.organisateur,
      date: event.date,
      participants: event.participants
    }
  })
}
