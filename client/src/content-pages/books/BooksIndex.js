import '../.././App.css';
import DisplayBook from "./display/DisplayBook"
import DisplayBookList from './display/DisplayBookList'
import AddBook from './forms/AddBook';

function BooksIndex() {
  return (
    <div>
      <h2>Books</h2>
      <DisplayBookList/>
      <DisplayBook/>
      <AddBook/>
    </div>

  );
}

export default BooksIndex;
