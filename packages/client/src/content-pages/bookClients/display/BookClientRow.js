import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK_CLIENT } from "../../../utils/mutations/bookClientMutations";
import { GET_BOOK_CLIENTS } from "../../../utils/queries/queries";

const BookClientRow = ({ bookClient }) => {
  const [deleteBookClient] = useMutation(DELETE_BOOK_CLIENT, {
    variables: { id: bookClient.id },
    refetchQueries: [{ query: GET_BOOK_CLIENTS }],
  });

  return (
    <tr>
      <td>{bookClient.id}</td>
      <td>{bookClient.name}</td>
      <td>{bookClient.email}</td>
      <td>{bookClient.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteBookClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default BookClientRow;
