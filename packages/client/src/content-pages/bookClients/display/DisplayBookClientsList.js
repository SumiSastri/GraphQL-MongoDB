// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";
// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBookClientRow from "./DisplayClientRow";
import AddBookClient from "../forms/AddBookClient";

const DisplayBookClientsList = () => {
  const { error, loading, data } = useGetBookClientsQuery();
  console.log("BookClientsList:", { error, data, loading });
    if (error) return <ErrorHasOccurredComponent />
    if (loading) return <Loading />
  return (
    <div>
 {!loading && !error && (
   <><AddBookClient />
   <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Client Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.bookClients.map(bookClient => {
              return (
                <DisplayBookClientRow key={bookClient.id} bookClient={bookClient} />

              );
            })}
          </tbody>
        </table></>
       )}
    </div>
  );
}

export default DisplayBookClientsList;