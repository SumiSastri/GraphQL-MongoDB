Apollo is a node.js implementation of the GraphQL rules (protocol).

The Apollo Client handles front-end HTTP requests and resolves key issues in the hand-over of data from the front-end to the back end.

A cache for example, the in-memory cache, stores the data temporily in the Apollo client cache and displays the received data from the HTTP request without a delay.

Apollo has its own methods for the GraphQL library and resolves the front-end mutations handling the state-management in the front-end for the React library.

There is some boiler plate - look at `index.js` where the InMemoryCache and other Apollo state-management functionality is added and available right through the app.