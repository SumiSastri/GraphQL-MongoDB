# What is the useQuery() method with Apollo Client?

Apollo Client (front-end server) also allows us to use a hook called `useQuery()` which also acts as local state management. 

Once `gql({})` is used to get the data it resolves the request-response and the combination of `gql({})` and `useQuery()` act in conjunction like an HTTP runner (middleware).

The `useQuery()` hook is used to resolve these front-end data changes and state management of the HTTP response received from the request. 

We get the data, loading state, refetch and errors as part of this hook which can be deconstructed and used in the React Component.

With a REST API we would have had to use either React-Redux for state management or a Context-Provider combination.

This is an example of how the Apollo library's `useQuery()` hook works to handle internal state for the React component

There are essentially 2 queries made
1. Get all resources required in local state
2. Get resource by Id

# Examples

1. Get all resources required in local state - in this case only the name and id required for the component in the Books section of the app

```
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`;
<!-- query + hook to fetch data and refetch for Apollo cache -->
export const useGetBooksQuery = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);
  return {
    error,
    data,
    loading,
    refetch,
  };
};
```

2. Get resource by Id - to update a resource or delete it the specific resources Id is required
This method allows you to pass the resource/ doc/ data by its Id as a prop into a component where the update and delete methods can be written and local state of that component mutated.

```
import { useQuery, gql } from "@apollo/client";

const GET_BOOK_ID = gql`
  query GetBookId($id: String!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        century
        books {
          name
          id
        }
      }
    }
  }
`;

export const useGetBookIdQuery = (id) => {
  const { loading, error, data, refetch } = useQuery(GET_BOOK_ID, {
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
```