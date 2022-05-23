import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import FormInput from "../components/FormInput/FormInput"

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

class AddBook extends Component {
    displayAuthors(){
        let data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }
    render(){
        console.log("AddBook props", this.props);

        return(
            <form id="add-book">
      <h3>Add a book</h3>
                <FormInput
          className="inpt-1s"
          label="Book Name"
        />
        <FormInput
          className="inpt-1s"
          label="Genre"
        />    
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>    
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);