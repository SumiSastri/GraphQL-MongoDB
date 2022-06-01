import '../.././App.css';
import DisplayBookList from './display/DisplayBookList'
import AddBook from './forms/AddBook';

function BooksIndex() {
  return (
    <div>
      <DisplayBookList/>
      <AddBook/>
    </div>

  );
}

export default BooksIndex;
