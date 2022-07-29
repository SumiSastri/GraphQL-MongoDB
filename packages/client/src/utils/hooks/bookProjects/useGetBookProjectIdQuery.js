import { useQuery, gql } from "@apollo/client";

const GET_BOOK_PROJECT_ID = gql`
  query GetBookProjectId($id: ID!) {
    bookProject(id: $id) {
      id
      name
      description
      status
      bookClient {
        id
        name
        email
        phone
      }
    }
  }
`;

export const useGetBookProjectIdQuery = (id) => {
  const { loading, error, data, refetch } = useQuery(GET_BOOK_PROJECT_ID, {
    variables: {
      id,
    },
  });
  return {
    error,
    data,
    loading,
    refetch,
  };
};
