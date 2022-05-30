import React, {useState} from 'react';
import {useMutation} from '@apollo/client';

// data
import { useGetBookIdQuery } from "../../../utils/hooks/useGetBookIdQuery";
import { useGetBooksQuery } from '../../../utils/hooks/useGetBooksQuery';
import {CREATE_BOOK} from "../../../utils/mutations/createBookMutation";

// components
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import Loading from "../../common-components/loading/Loading";


function UpdateBook({bookId}) {
// console.log("updateBook props:", bookId)
const { error, loading, data } = useGetBookIdQuery(bookId);
const [name, setName] = useState('');
const [genre, setGenre] = useState('');
const [authorId, setAuthorId] = useState('');

const [createBook] = useMutation(CREATE_BOOK, {
    variables: {
     name,
     genre,
     authorId,
       },
     });
// the data has to be refetched with the Apollo server method to be displayed 
     const {refetch} = useGetBooksQuery();

function displayAuthors(loading, data) {
    if (error)
        return `Error! ${error.message}`;
    if (loading) {
        return (<option disabled>Loading authors...</option>);
    } else {
        return data.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
        });
    }
}

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Log submit new book:", name, genre, authorId);   
    // send to backend Db
        createBook(name, genre, authorId)
        refetch()
}


if (error) return <div><ErrorHasOccurredComponent /></div>
if (loading) return <div><Loading /></div>


return(
    <form onSubmit={handleSubmit}>     
        <div className="field">
            <h2>Edit & Update</h2>
            <label>Book name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}>
            {data.book.name}</input>
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}>
                {data.book.genre}</input>
        </div>
        <div className="field">
            <label>Author:</label>
            <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                <option>Select author</option>
                { displayAuthors(loading, data) }
            </select>
        </div> 
        <h4>Update this book</h4>    
        <button>+</button> 
     
    </form>
)
}
  

export default UpdateBook;