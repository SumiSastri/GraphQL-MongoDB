import { Link } from "react-router-dom";

import '../.././App.css';
import DisplayBookProjectsList from './display/DisplayBookProjectsList';

function BookProjectsIndex() {
  return (
    <div>
      <h2>Book Project's Page</h2>
      <Link to='/'>Back to Home Page</Link>
      <DisplayBookProjectsList />
    </div>

  );
}

export default BookProjectsIndex;