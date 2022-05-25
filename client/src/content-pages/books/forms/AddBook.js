import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
// import {useQuery, gql, compose} from '@apollo/client';

import "../../../App.css"
import {GET_AUTHORS} from "../../../utils/queries"
// import {GET_AUTHORS, CREATE_BOOK} from "../../../utils/queries"

const AddBook =() =>{
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading, error, data } = useQuery(GET_AUTHORS);
    
    // console.log("Add Book:",{error, data, loading})

    const displayAuthors = (loading, data) =>{
        if (error) return `Error! ${error.message}`;
        
        if(loading){
            return( <option disabled>Loading authors...</option> );
        }else{
            return data.authors.map(author =>{
                return (<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit new book:", name, genre, authorId);
    }

    return(
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}  />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                    <option>Select author</option>
                    { displayAuthors(loading, data) }
                </select>
            </div>
            <div className="btn-container">       
            <h4>Add book</h4>
            <button>+</button>
            </div>
        </form>
    )
}

export default AddBook;
// export default compose(
    
//     gql(GET_AUTHORS, {name:"GET_AUTHORS"}),
//     gql(CREATE_BOOK, {name:"Get Authors"}),

// )(AddBook)
