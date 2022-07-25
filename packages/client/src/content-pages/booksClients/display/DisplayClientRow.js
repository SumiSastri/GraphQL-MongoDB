import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_BOOK_CLIENT } from '../../../utils/mutations/bookClientMutations';
import { GET_BOOK_CLIENTS } from '../../../utils/queries/queries';


export default function DisplayBookClientRow({ bookClient }) {
  const [deleteBookClient] = useMutation(DELETE_BOOK_CLIENT, {
    variables: { id: bookClient.id },
    refetchQueries: [{ query: GET_BOOK_CLIENTS }],
    // 2nd Option for refetch
    // update(cache, { data: { deleteBookClient } }) {
    //   const { bookClients } = cache.readQuery({ query: GET_BOOK_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_BOOK_CLIENTS,
    //     data: {
    //       bookClients: bookClients.filter((bookClient) => bookClient.id !== deleteBookClient.id),
    //     },
    //   });
    // },
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
}

