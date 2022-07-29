import {useQuery, gql} from '@apollo/client';

const GET_BOOK_PROJECTS = gql`
  query getBookProjects {
    bookProjects {
     id
     name
     status
     description
    }
  }
`;

export const useGetBookProjectsQuery = () => {
    const { loading, error, data, refetch } = useQuery(GET_BOOK_PROJECTS);
    return {
        error,
        data,
        loading,
        refetch
    }
}