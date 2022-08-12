import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";
// STEP 1 set up front-end query data by ID for single resource
import { GET_BOOK_ID } from "../../../utils/queries/queries";
import { useGetBookIdQuery } from "../../../utils/hooks/book/useGetBookIdQuery";
// STEP 2 mutate front end data and pass the id as a prop to a parent component
import { UPDATE_BOOK } from "../../../utils/mutations/book-mutations/updateBook";
// components
import ErrorHasOccurredComponent from "../../../common//errors/ErrorHasOccurredComponent";
import Loading from "../../../common/loading/Loading";

// STEP 3: pass prop in child - UPDATE IS CREATE on specific id got from parent <DisplayBook/>
const UpdateBook = ({ bookId }) => {
  const { error, loading, data } = useGetBookIdQuery(bookId);
  // console.log(data, "update book data")
  // STEP 4 log and check data flows from parent to child component

  // STEP 5: reassign queried data to local state 
  // UPDATE IS A PARTIALLY FILLED FORM USING A QUERY FROM DB OF EXISTING DATA
  const [name, setName] = useState(data.book.name);
  const [genre, setGenre] = useState(data.book.genre);
  // console.log(name)
  // STEP 6: check data flow
  
  // STEP 7: Create update payload mutate component state of fields to be updated
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

  // STEP 8 - call the updateBook function in handle submit - log and check
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
  // STEP 9 - add error and loading components
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

      // STEP 10 - form to update target values very similar to create
      // onSubmit handler will send the updated payload to the backend
  return (
    <>
    <button
      type='button'
      className='btn btn-secondary'
      data-bs-toggle='modal'
      data-bs-target='#addClientModal'
    >
      <div className='d-flex align-items-center'>
        <FaUser className='icon' />
        Update book details
      </div>
    </button>

    <div
      className='modal fade'
      id='addClientModal'
      aria-labelledby='addClientModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addClientModalLabel'>
              Update Book Details
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
          className='form-control'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input
          className='form-control'
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
              </div>
              <button
                type='submit'
                data-bs-dismiss='modal'
                className='btn btn-secondary'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);
};
    
export default UpdateBook;
