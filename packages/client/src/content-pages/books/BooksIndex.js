import '../.././App.css';
import DisplayBookList from './display/DisplayBookList'
import AddBook from './forms/AddBook';

function BooksIndex() {
  return (
    <div>
      <h2>Books and Authors Page</h2>
      <DisplayBookList/>
      <AddBook/>
    </div>

  );
}

export default BooksIndex;
