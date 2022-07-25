import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
// styling
import "../../../App.css";
// data
import { useGetBooksQuery } from "../../../utils/hooks/useGetBooksQuery";
import { GET_AUTHORS } from "../../../utils/queries/queries";
import { CREATE_BOOK } from "../../../utils/mutations/createBookMutation";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS);

  console.log("Add Book:", { error, data, loading });

  const [createBook] = useMutation(CREATE_BOOK, {
    variables: {
      name,
      genre,
      authorId,
    },
  });
  const { refetch } = useGetBooksQuery();
  // for drop down list
  function displayAuthors(loading, data) {
    if (error) return `Error! ${error.message}`;
    if (loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log submit new book:", name, genre, authorId);
    // new payload
    createBook(name, genre, authorId);
    refetch();
  };

  return (
    <form id='add-book' onSubmit={handleSubmit}>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors(loading, data)}
        </select>
      </div>
      <h4>Add book</h4>
      <button>+</button>
    </form>
  );
};

export default AddBook;
