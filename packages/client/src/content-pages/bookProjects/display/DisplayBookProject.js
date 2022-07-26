import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// data
import { GET_BOOK_PROJECT_ID } from "../../../utils/queries/queries";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
// import ClientInfo from "../../bookClients/display/BookClientInfo"


const DisplayBookProject = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_PROJECT_ID, {
    variables: { id },
  });
    console.log("DisplayBookProject:", { error, data, loading });

  if (loading) return <Loading />;
  if (error) return <ErrorHasOccurredComponent />;

  return (
    <div>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link
            to='/book-projects'
            className='btn btn-dark btn-sm w-25 d-inline ms-auto'
          >
            Back to Book Projects
          </Link>
          <h1>{data.bookProject.name}</h1>        
          <p>{data.bookProject.description}</p>
          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.bookProject.status}</p>

          {/* <ClientInfo bookClient={data.bookProject.bookClient} /> */}

        </div>
      )}
    </div>
  );
};
export default DisplayBookProject;
