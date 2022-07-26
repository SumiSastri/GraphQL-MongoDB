import { Link } from "react-router-dom";

const BookProjectCard = ({ bookProject }) => {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{bookProject.name}</h5>
            <Link
              className='btn btn-light'
              to={`/book-projects/${bookProject.id}`}
            >
              View
            </Link>
          </div>
          <p className='small'>
            Status: <strong>{bookProject.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookProjectCard;
