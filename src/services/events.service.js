import { client } from '../config/init_graphql';
import gql from 'graphql-tag';

/**
 * Funtions
 */
export const fetchEvents = () => {
  return client.query({
    query: gql`
      {
        events {
          _id
          nom
          informations
          description
          nbpersonnes
          nbPersonInscrit
          organisateur
          date
          participants
        }
      }
    `,
  });
};

export const updateEvent = () => {
  return client.query({
    query: gql`
      {
        events {
          _id
          nom
          informations
          description
          nbpersonnes
          nbPersonInscrit
          organisateur
          date
          participants
        }
      }
    `,
  });
};

export const addEvent = () => {
  return client.mutate({
    mutation: gql`
      {
        createEvent {
          nom
          informations
          description
          nbpersonnes
          nbPersonInscrit
          organisateur
          date
          participants
        }
      }
    `,
  });
};
