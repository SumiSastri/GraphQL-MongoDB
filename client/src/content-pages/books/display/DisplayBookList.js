import { useState } from "react";

// data
import { useGetBooksQuery } from "../../../utils/hooks/useGetBooksQuery";

// components
import Loading from "../../common-components/loading/Loading"
import ErrorHasOccurredComponent from '../../common-components/errors/ErrorHasOccurredComponent';
import DisplayBook from "./DisplayBook";

const DisplayBookList =() =>{

// call query
  const {error, loading, data} = useGetBooksQuery();
    console.log("BookList:", {error, data, loading})

  // add handleClick logic
  const [selected, setSelected] = useState(null);

    //  custom function to render data
    const displayBooks = (loading, data) =>{
        
    if (error) { return( <ErrorHasOccurredComponent/>)
    
} else if (loading){
            return( <Loading/>)
        }else{
            return data.books.map(book => {
                return (
                <li key={ book.id } 
                onClick={() => {setSelected(book.id)}}>{ book.name }</li>)
            })
        }
    }   
        return(
            <div>
                <ul id="book-list">
                { displayBooks(loading, data, error) }
                {selected && <DisplayBook bookId={selected} />}
                </ul>
            </div>
        );
    }

 export default DisplayBookList;
