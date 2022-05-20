A MongoDB database is one big object containing collections. Each collection has contextual items, for example, contacts for a database. Then inside a collection we have documents which are the contacts themselves.
User contact information would be in several indivdual documents. Inside each document we have the data for each contact, such as address, telephone, email, et cetera.

The document, itself, looks like a JSON object with a key-value pair approach or arrays of data. Mongoose, middleware, allows us to set a schema for a collection and pre-define what each key-value pair takes as type.