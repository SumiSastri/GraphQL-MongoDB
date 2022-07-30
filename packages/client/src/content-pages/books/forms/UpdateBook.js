import React, { useState } from "react";
import { useMutation } from "@apollo/client";

// STEP 1 set up front-end query data by ID for single resource
import { GET_BOOK_ID } from "../../../utils/queries/queries";
import { useGetBookIdQuery } from "../../../utils/hooks/book/useGetBookIdQuery";
// STEP 2 mutate front end data and pass the id of the resource as a prop to component
import { UPDATE_BOOK } from "../../../utils/mutations/book-mutations/updateBook";
// components
import ErrorHasOccurredComponent from "../../../common//errors/ErrorHasOccurredComponent";
import Loading from "../../../common/loading/Loading";

// UPDATE IS CREATE on a specific ID passed as prop from parent DisplayBook
const UpdateBook = ({ bookId }) => {
  const { error, loading, data } = useGetBookIdQuery(bookId);
  // console.log(data, "update book data")
  // STEP 3 log and check data flows

  // STEP 4: set local state
  // UPDATE IS A PARTIALLY FILLED FORM USING A QUERY FROM DB OF EXISTING DATA
  const [name, setName] = useState(data.book.name);
  const [genre, setGenre] = useState(data.book.genre);
  // console.log(name)

  // STEP 5: once data is flowing correctly create custom function for submit payload with id
  const [updateBook] = useMutation(UPDATE_BOOK, {
    variables: {
      name,
      genre,
      id: data.book.id,
    },
    // to populate partially filled form
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

  // STEP 6 - call the updateBook function in handle submit - log and check
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log default book update:", name, genre);

    if (!name || !genre) {
      return alert("Please fill in all fields");
    }
    // send to backend Db
    updateBook(name, genre);
    console.log("Log updated book data:", name, genre);
  };

  if (error)
    return (
      <div>
        <ErrorHasOccurredComponent />
      </div>
    );
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <hr />
        <h4>Update book details</h4>
        <label>Book name:</label>
        <input
          className='form-control'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          className='form-control'
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <h4>Update this book</h4>
      <button>+</button>
    </form>
  );
};

export default UpdateBook;
