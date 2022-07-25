The `gql` method is used for resolving request-response cycles. It is used as part of the get data HTTP call in the REST API.

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

