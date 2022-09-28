# GraphQL types

- Like TypeScript and Mongoose (ORM), GraphQL uses strongly-typed schema which serves as a contract between client & server.

- Each type is an entity and if these entities need to share data then connections must be built between them.

The job of a schema is
1) To define a type of the data entity
2) To create the relationship between entities
3) To create a root query that is the contract between what we are requesting and expecting back from the resource
4) Entity relationship diagrams should be created 
=>> one to many
=>>> many to many
=> one to one

**Scalar types or primitive data**

- Integers: a signed 32-bit integer
- Floats: a double-precision floating point value
- Strings: text characters
- Booleans: true or false
- ID : used to re-fetch an object or used as a key for a cache

- Enums: special scalar types that are restricted to a particular set of allowed values
- Lists: used to fetch a list key-value pairs

There are several types - these are an illustrative set of the most common

**query and mutation types**
In a graphQL schema which is an object there are 2 additional types

query = request in REST
mutation = change api-data

query - mandatory
mutation - optional

**Non-nullable types**

A type can be either set to one type or null, if we do not want a null value, a non-nullable type is set with `!`

This is used when you want to ensure that no empty fields of data are sent to the backend and that all fields have a value or are rejected.

This is parsed in the `resolve()` method and a reference error will be thrown to show that it is a mandatory field. Used for validating form and form fields.
