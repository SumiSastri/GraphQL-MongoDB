## Mongo Collections, Documents, Schemas & Models

- A Collection is namespace for all the data/ documents/ fields/ models of data in the database
- A document is next in the hierarchy and lives within a collection which holds schemas and modesl
- Schemas - define the structure of the objects in the collection
- Models - represents separate collections in the db (user model, product model, etc.)

Once connected, and having created your first cluster, you will need to create a new cluster each time you want a new database.

In MongoDB, a database serves as a namespace for collections.

Collections store individual records called documents.

This hierarchy allows us to group together records of similar items within collections, and group collections required for the same application within the same database.

We can also establish security policies that authorize users with different roles and different levels of access at the database, or collection, level.

MongoDB does not currently support authorization settings specific to individual documents.

Each database and collection combination define a namespace.

We typically reference a specific collection by expressing the name of the database, followed by a dot, followed by the name of the collection.

Compass provides information about the size of the database, the number of collections it contains, and the number of indexes on these collections.

To access a database, first click on the database, and then the collection. Now we can create our first schema.

Schemas contain **scalar values** such as strings, integers, and doubles, MongoDB supports nesting a document as the value of a field within another document.

For many applications, it's important to be able to model data, not just as a flat set of keys and values, but as hierarchical data structures that reflect the way a developer needs to work with the data in their application.

If it's appropriate to your application, you can nest documents two or more levels deep.

MongoDB's query language provides full support for filtering documents based on the values of fields in nested documents.

MongoDB is designed to provide a great deal of flexibility in modeling your data, so that you can design a schema that is performant for your application's data access patterns.

Your data model should support efficient handling of the reads and writes your application requires. In addition to nested documents, MongoDB also supports **array values** for fields.
