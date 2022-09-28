# GraphQL schemas

An API end point tells us what we need to know about the backend resources we want to consume on the front end.

With GrapQL, to access backend resources, we need a GraphQL schema which is data that is defined in an object that is strongly typed.

The most basic schema in GrapqhQL is the object type.

Everytime you make a query you create an object type with a schema that defines the contract between the object and the request from the API end point. To see the different GraphQL types also review `graphQL-types.md`.

A schema is written server-side to specify all the fields and their types that you require from backend resources. This ensures you are getting the right data in the right format from the backend resources.

So every time you request data you create an object type - so a BookType, AuthorType, BlogType etc., to define your request with a strongly typed object and its schema.

It is the blueprint of the structure of the data you are looking for in the backend resources.

Each type is an entity but each entity if data is to be shared must create relationships between these entities. With SQL data bases these are joins. With graphQL they are nested objects.