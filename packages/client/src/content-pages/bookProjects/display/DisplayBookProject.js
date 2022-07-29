import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation} from '@apollo/client';
import { FaTrash } from 'react-icons/fa';

// data
import { GET_BOOK_PROJECT_ID } from "../../../utils/queries/queries";
import { DELETE_BOOK_PROJECT } from "../../../utils/mutations/book-project-mutations/deleteBookProjectMutation";
import { GET_BOOK_PROJECTS } from '../../../utils/queries/queries';

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
// import UpdateBookProjectForm from '../forms/UpdateBookProjectForm';

const DisplayBookProject = () => {
    // with hooks and refetch
     // const { error, loading, data } = useGetBookProjectIdQuery(bookProjectId);
    // const [deleteBookProject] = useMutation(DELETE_BOOK_PROJECT, {
    //   variables: { id: bookProjectId },
    //   refetchQueries: [{ query: GET_BOOK_PROJECT_ID }],
    // });

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_PROJECT_ID, {
    variables: { id },
  });
    console.log("DisplayBookProject:", { error, data, loading });

    const [deleteBookProject] = useMutation(DELETE_BOOK_PROJECT, {
      variables: { id },
      refetchQueries: [{ query: GET_BOOK_PROJECTS }],
    });

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
         <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteBookProject}>
        <FaTrash className='icon' /> Delete Project
      </button>
      <button className='btn Fsecondary' onClick={deleteBookProject}>
        <FaTrash className='icon' /> Update Project
      </button>
    </div>
           {/* <UpdateBookProjectForm/> */}
          {/* <ClientInfo bookClient={data.bookProject.bookClient} /> */}

        </div>
      )}
    </div>
  );
};
export default DisplayBookProject;
