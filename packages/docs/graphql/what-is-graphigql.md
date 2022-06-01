# What is GraphiQL

Prounounced `grafical`, graphiql is a run-time environment that mocks up a front end that helps you test the GraphQL server.

It is spun up with an Express server on local host. It is an in-browser tool for writing, validating, and testing GraphQL queries.

A query is set up as an object and related queries as nested objects.

eg:
```
{
  book(id:"1"){
    name
    id
    genre
  }
}
```

Accessed /graphiql (in local host)



An example GraphQL query might look like:
```
     {
       field(arg: "value") {
         subField
       }
     }
```
# Keyboard shortcuts:

Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
Merge Query:  Shift-Ctrl-M (or press the merge button above)
Run Query:  Ctrl-Enter (or press the play button above)
Auto Complete:  Ctrl-Space (or just start typing)
