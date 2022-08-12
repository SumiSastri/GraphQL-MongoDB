// import { Link } from "react-router-dom";

const BookProjectCard = ({ apiData, children }) => {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            {children}       
            {/* Eg of children and routing embedded {apiData} goes here
            <Link
              className='btn btn-light'
              to={`/${apiData.id}`}
            >
              View
            </Link>
          // ApiData props data goes here
          <p className='small'>
            Status: <strong>{apiData.name}</strong>
          </p>
           */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookProjectCard;
