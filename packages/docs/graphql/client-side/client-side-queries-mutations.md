# How are frontend GraphQL mutations different from the backend mutations

While Apollo server handles the front-end request-response cycle with its own methods, GrapQL queries and mutations along with Apollo manage the how the data is called and how state is transferred from back-end sources to the frontend.

There are 2 essential queries to  data that is stored outside the front-end frameworks for data-safety/security - the first to get all data required by the front-end and the second is to identify specific resources via an id.

Once the request is made, the front-end mutations with Apollo as a client are the equivalent of state-management. Data is then used to display/ add/ update or delete the local state of the component. 

The methods in the front end are also mirrored in the back-end server. In this case the server is Express, but any server this is required. So for example, with AWS a typescript lamda is written to write the back-end mutations.