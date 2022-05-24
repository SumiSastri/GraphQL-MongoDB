import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';
import { useGetBooksQuery } from "../../../utils/hooks/useGetBooksQuery";

const DisplayBookList =() =>{
// call query
  const {error, loading, data} = useGetBooksQuery();
    // console.log("BookList:", {error, data, loading})

    const displayBooks = (loading, data) =>{
    if (error) { return( <ErrorHasOccurredComponent/>)
    
} else if (loading){
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
                { displayBooks(loading, data, error) }
                </ul>
            </div>
        );
    }

 export default DisplayBookList;
