The Apollo Client handles front-end HTTP requests and resolves key issues in the hand-over of data from the front-end to the back end.

A cache for example, the in-memory cache, stores the data temporily in the Apollo client cache and displays the received data from the HTTP request without a delay.

Apollo has its own methods for the GraphQL library and resolves the front-end mutations handling the state-management in the front-end for the React library.

The `gql` method is used for resolving request-response cycles.

So when we get the data all we need to do is return the key-value pairs that we want which come in from the GraphQL server where this is first resolved with the `resolver()` function and then passed on either to backend databases or to front end state management libraries such as Apollo.

An example of how the query method works

```
<!-- parses graphql - as it is not JS -->
import {gql} from "@apollo/client";

const GET_BOOK_CLIENTS = gql`
    {
        bookClients {
            name
            email
            phone
            id
        }
    }
`;
```

The `useQuery()` hook is used to resolve these front-end data changes and state management of the HTTP response received from the request. We get the data, loading state, refetch and errors as part of this hook which can be deconstructed and used in the React Component.

With a REST API we would have had to use either React-Redux for state management or a Context-Provider combination.

This is an example of how the Apollo library's `useQuery` hook works to handle internal state for the React component

```
export const useGetBookClientsQuery = () => {
    const { loading, error, data, refetch } = useQuery(GET_BOOK_CLIENTS);
    return {
        error,
        data,
        loading,
        refetch
    }
}
```