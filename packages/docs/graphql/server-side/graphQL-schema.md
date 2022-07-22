# GraphQL schemas

Data is set in a schema which is strongly typed.

The most basic schema is the object type - everytime you make a query you create an object type with a schema that defines the contract between the object and the request.

A schema is written server-side to specify all the fields and their types. The most basic type is the object type (see the doc `graphQL-schema.md`) for more details.

So every time you request data you create an object type - so a BookType, AuthorType, BlogType etc., to define your request with a strongly typed object and its schema.