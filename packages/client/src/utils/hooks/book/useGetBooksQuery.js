import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`;
// query + hook to fetch data and refetch for Apollo cache
export const useGetBooksQuery = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);
  return {
    error,
    data,
    loading,
    refetch,
  };
};
