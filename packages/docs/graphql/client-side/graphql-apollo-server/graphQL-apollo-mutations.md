# GraphQL-Apollo front-end mutations to Update and Delete resources

The key principles are the same as any other HTTP fetcher
- The resource is queried by Id in the request-response cycle
- The query data is set to local state of the component requiring the data
- A parent component holds this state and displays the front-end ui of the document
- A delete button with a delete handler can delete this document on click -> this is then sent back in the request-response cycle and the document is destroyed
- An update button navigates off the page either with a modal or routing to a new page where a partially filled form with the data existing in the backend displayed - an update document handler is written and called in the submit handler to pass the data back into the back end. The form fields local state is updated with a call back on the `onChange()` handler to reset local state.

The specifics of how GraphQL-Apollo handle this is outlined here

__Delete by Id__

The easier of the 2 mutations to write in local state is delete.

In the  `<DisplayBook/>` component, a single resource is displayed by Id.
This allows this resource to be deleted and updated on the same page.

The call to the back-end is a single call which is destructive and deletes the whole resource by its id.

To dynamically access the id, React Router method of `useParams()` is used to identify the id in the URL.

```
<!-- pass the data as props - can be used by the UpdateBookForm  -->

const DisplayBook = ({ bookId}) => {

<!-- get data from backend with a query  -->
  const { error, loading, data,  } = useGetBookIdQuery(bookId);
  
<!-- delete payload with useMutation() method reassign value to local state -->

  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: bookId },

<!-- refetch with Apollo cache both the Id and all the books as one resource deleted and you can see the rest of the books on the page -->

    refetchQueries: [{ 
      query: GET_BOOK_ID,
      variables: {
        id: bookId,
      },
    }, { query: GET_BOOKS }],
  });
  
  ```

  __Update by Id__

In the component where the query is run to access the Id of the document, the prop of the Update component receives the data that it passes down to child component.

This data then can be used in a form that comes back with partially filled data - the data that user has completed and is stored in the back-end.

Step 1: 
Identify parent component and use the Id as a prop `<UpdateBook bookId={data.book.id} />` in this case this is in the `render()` method of the `<DisplayBook/>` component.

There are 10 essential steps in the comments and demo of the `<UpdateBook>` component summarised here

__Imports__

1. Set up front-end query data by ID for single resource
2. Mutate front end data and pass the id as a prop to a parent component `<DisplayBook/>` in this case

__Use prop data__

3. Pass prop in child &
4. Check data flows into child from parent

```
const UpdateBook = ({ bookId }) => {
  const { error, loading, data } = useGetBookIdQuery(bookId);
  <!-- console.log(data, "update book data") -->
```

__Set local state of component__

5. Reassign queried data to local state - Update is a partially filled form so the state object should have the original data from the prop &

6. Check data is reassigned and flows propery into local state

```
  const [name, setName] = useState(data.book.name);
  const [genre, setGenre] = useState(data.book.genre);
  <!-- console.log(name) -->
```

7.  Create a custom update book function

```
  const [updateBook] = useMutation(UPDATE_BOOK, {
    variables: {
      name,
      genre,
      id: data.book.id,
    },
     <!-- to populate partially filled form -->
    refetchQueries: [
      {
        query: GET_BOOK_ID,
        variables: {
          name: data.book.name,
          genre: data.book.genre,
          id: data.book.id,
        },
      },
    ],
  });
```

8. Call the function in handle submit &
9. Log and check data flows/ add error handling and loading in the submit handler

```
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log default book update:", name, genre);

    <!-- send to backend Db -->
    updateBook(name, genre);
    console.log("Log updated book data:", name, genre);
  };

 ```
__Render form and update target values__

10. Render the update form to update target values very similar to create form, the submit handler will send the local state data back to the back end.

The `onChange()` handler sets the local state of the render method with a call-back function to update the local state with the user input.

```
<input        
value={name}
onChange={(e) => setName(e.target.value)}
/>
```