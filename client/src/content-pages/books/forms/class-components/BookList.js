import React, { Component } from 'react';
// binds grapql queries to react
// import {gql} from "@apollo/client";

import Loading from "../../../common-components/loading/Loading"
// import {getBooksQuery} from "../../utils/queries"

export default class BookList extends Component {
    // async await?  
    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return( <Loading/>);
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id }>{ book.name }</li>
                );
            })
        }
    }
    
    render(){
        // the query is stored in the component props
        console.log("BookList props", this.props);
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}
// binds graphlql to the component 
// export default gql(getBooksQuery)(BookList);