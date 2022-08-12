import { Link } from "react-router-dom";

const BookProjectCard = ({ book }) => {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{book.name}</h5>
            <Link
              className='btn btn-light'
              to={`/books-and-authors/${book.id}`}
            >
              View
            </Link>
          </div>
          <p className='small'>
            Genre: <strong>{book.genre}</strong>
          </p>
          <p className='small'>
            Author: <strong>{book.author.name}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookProjectCard;