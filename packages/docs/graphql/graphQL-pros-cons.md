# PROS

- Aggregated queries in one query
- Exact requirements met - language agnostic
- Strongly-typed - predictability of query - error-handling with the schema validation with resolver functions
- Eco-system and tooling - server libraries batch resolving
  -- IDE's - GraphQL Visual Editor
  -- GraphQL Client libraries like (Apollo-Client- most widely adopted) (Relay-Client - specifically for react for data-fetching) writing queries to the backend to get the data. Incerceptors for caching query results as it does not come out of the box with GraphQL
  -- GraphQL Server libraries send responses back (Apollo-Serverside) (ExpressGraphQL) (GraphQL Yoga) Network-Layer - GraphQL Execution Engine - query from client to backend parsed or read - schema validated - query received is traversed field by field with resolver function for each field the execution alogrithm sending data back in the right order and shape as requested as json )
  -- Database to GraphQL server - Prisma (supports RDBMS and noSQL dbs) replaces ORMs - subscriptions
  -- GraphQL Voyager - schema representation with entity mapping
  -- GraphQL Faker - mock data



 - increase the multi-team productivity BE-FE teams can work in parallel, which enhances the multi-team productivity. Increased productivity among developers lead to a speed-up in the product development. With GraphQL, it is possible to completely redesign the UI of your app without needing to touch the back-end. 
 
- no multiple roundtrips to fetch data, and with no reason for over-fetching data, GraphQL is naturally more efficient. This improves performance of your API calls, hence, speeding up your app. 

-  GraphQL APIs need to be tested only when there is a change in the schema or if there's a fresh schema. This means reduced cost in testing for your business. This also holds true for deployments. Compared to REST, GraphQL is much less expensive for testing and deployments. 
-  GraphQL can be used to unify your existing legacy systems and hide the complexities behind the new GraphQL API. Now your new front-end applications can be developed to simply talk to the GraphQL server. They can fetch the data that they need. The GraphQL server is then responsible to fetch the data from the existing systems and return the right JSON back. This would be a good addition to your code, making front-end applications communication with your server much better and clearer.

- Integration with React [https://app.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app]
- Developer community (Twitter/ Facebook/ )

# CONS

- One of the cons is developers can do anything against schema - aliases of the same query to return different bits of information
- Caching not embedded as in HTTP
- Error handling and schema validation require client-server libraries as add-ons
