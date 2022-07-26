
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
// data
import { DELETE_BOOK_PROJECT } from "../../../utils/mutations/bookProjectMutations";
import { GET_BOOK_PROJECTS } from '../../../utils/queries/queries';


const DeleteBookProjectButton= ({ bookProjectId }) => {
  const [deleteBookProject] = useMutation(DELETE_BOOK_PROJECT, {
    variables: { id: bookProjectId },
    refetchQueries: [{ query: GET_BOOK_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteBookProject}>
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  );
}

export default DeleteBookProjectButton