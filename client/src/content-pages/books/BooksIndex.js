import '../.././App.css';
import BookList from '../books/display/BookList'
import AddBook from './forms/hooks/AddBook';

function BooksIndex() {
  return (
    <div>
      <h2>Books</h2>
      <BookList/>
      <AddBook/>
    </div>

  );
}

export default BooksIndex;
