// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";

// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBookClientRow from "./DisplayClientRow";

const DisplayBookClientsList = () => {
  const { error, loading, data } = useGetBookClientsQuery();
  console.log("BookClientsList:", { error, data, loading });
    if (error) return <ErrorHasOccurredComponent />
    if (loading) return <Loading />
  return (
    <div>
      {/* nullish coalesing */}
 {!loading && !error && (
  //  bootstrap - added to public index.html page for styling
     <table className='table table-hover mt-3' >
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
      // <tr key={bookClient.id}>
      //   <tr>{bookClient.id}</tr>
      //   <tr>{bookClient.name}</tr>
      //   <tr>{bookClient.email} </tr>
      //   <tr>{bookClient.phone} </tr>
      //   </tr>
      <DisplayBookClientRow key={bookClient.id} bookClient={bookClient} />

    );
  })}
</tbody>
     </table>
       )}
    </div>
  );
}

export default DisplayBookClientsList;