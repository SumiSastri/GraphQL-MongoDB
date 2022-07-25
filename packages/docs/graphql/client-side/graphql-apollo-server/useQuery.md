Apollo server also allows us to use a hook called `useQuery` which also acts as local state management and once `gql` is used to get the data it resolves the request-response and the combination of `gql` and `useQuery` act in conjunction like an HTTP runner (middleware).

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