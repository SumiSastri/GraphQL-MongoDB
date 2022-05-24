import '../.././App.css';
import BookList from './BookList';
import AddBook from './forms/class-components/AddBook';

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
