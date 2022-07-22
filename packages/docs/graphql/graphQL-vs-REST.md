# What is the difference between GraphQL and a REST API?

REST APIs, or representational state transfer APIs, transfers a representation of the state in the data-layer of the app in the form of a request header to the API-end point. The request is then matched and a response is sent back through the HTTP (Hyper-Text-Transfer-Protocol) request-response cycle.

Each data-set required by the data-layer in the front-end of the app needs a matching API.

For example: If we are creating a music catalog, we need an API for the musicians, the record labels, the genres of music and we need to create the CRUD routes for each of these operations. The request send out sends back a response in `json`, all the data is sent back. There is a data-transformation process in the front-end of the app in the data-layer - filtering/ modifying the data returned so that it is suitable for the front-end page/ component to be rendered.

With FraphQL, this filtering out of unwanted data happens in the query method and the response is returned `.json` therefore only one query is needed as you can ask for one genre and all the musicians in that genre with one request. graphQl aggregates the data you require for the application. There is no under or over fetching of data - this improves the efficiency of the call.

Because REST retreives a significant amount of data, inbuilt in the HTTP request is caching. This is not a feature of GraphQL. Some libraries like Apollo and Relay come with caching options.

In terms of testing and deployment, GraphQL queries are easier and quicker to test than REST where every route has to be tested and data validated.

GraphQL is also easy to integrate into legacy systems that use REST. A hybrid system can operate until the switch over.

REST endpoints get out of control as data needs expand. This leads to multiple roundtrips and causes a slowness in response time. GraphQL does the same job with just a single request. With  aGraphQL query you can ask for exactly what you need to build an app. It then responds with the `.json` object with exactly what is asked for. 

This can save the developer tons of time and also improve the performance. 

In REST you can over-fetch and under-fetch of data. This means that we may want only one thing, but there is no way to filter that out in your request. Under-fetching happens if you want something specific, but that's not a part of that endpoint, so we need to make multiple roundtrips to get that data. GraphQL, you only get what you ask for in one single request because you tailor make queries to your exact needs. 

Another big difference between REST and GraphQL is that the front-end teams rely heavily on back-end teams to deliver the APIs. Potentially the development from the front-end point of view stalled until the back-end team gives them the API changes. Whereas in GraphQL, the front-end and back-end teams can work independently. The front-end team can work off mock APIs until the back-end team gets back to them with the finalized APIs. 
