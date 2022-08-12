# What is Apollo

Apollo is a node.js implementation of the GraphQL rules (protocol).

There is no need to use the native `fetch()` methods in JavaScript to run queries or other HTTP runners like the Axios library that abstracts some of the code to make the req-res cycle easier to handle and debug.

With Apollo the advantages over these other methods and libaries is that Appollo handles front-end HTTP requests and resolves key issues in the hand-over of data from the front-end to the back end specifically with GraphQL vs. REST.

Apollo has its own methods for the GraphQL library and resolves the front-end mutations handling the state-management in the front-end for the React library.

A cache for example, the in-memory cache, stores the data temporily in the Apollo client cache and displays the received data from the HTTP request without a delay.

There is some boiler plate/ config to set up an Apollo Client - look at `index.js` where the InMemoryCache and other Apollo state-management functionality is added and available right through the app as a wrapper (Provider).