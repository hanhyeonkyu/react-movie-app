import { gql } from "graphql-request";

export const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

export const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
