import {useQuery} from '@apollo/client';

import Loading from "../../common-components/loading/Loading"
import {GET_BOOKS} from "../../../utils/queries"

const BookList =() =>{
    const { loading, error, data } = useQuery(GET_BOOKS);

    const displayBooks = (loading, data) =>{
        if (error) return `Error! ${error.message}`;
        
        if(loading){
            return( <Loading/>)
        }else{
            return data.books.map(book => {
                return (<li key={ book.id }>{ book.name }</li>)
            })
        }
    }   
        return(
            <div>
                <ul id="book-list">
                { displayBooks(loading, data) }
                </ul>
            </div>
        );
    }

 export default BookList;
// binds graphlql to the component 
// export default gql(getBooksQuery)(BookList);