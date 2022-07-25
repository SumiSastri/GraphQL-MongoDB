// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";

// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";

// hardcode data to test
// const bookClients = [
//   {
//     id: '1',
//     name: 'Tony Stark',
//     email: 'ironman@gmail.com',
//     phone: '343-567-4333',
//   },
  // {
  //   id: '2',
  //   name: 'Natasha Romanova',
  //   email: 'blackwidow@gmail.com',
  //   phone: '223-567-3322',
  // },
  // {
  //   id: '3',
  //   name: 'Thor Odinson',
  //   email: 'thor@gmail.com',
  //   phone: '324-331-4333',
  // },
//   {
//     id: '4',
//     name: 'Steve Rogers',
//     email: 'steve@gmail.com',
//     phone: '344-562-6787',
//   },
//   {
//     id: '5',
//     name: 'Bruce Banner',
//     email: 'bruce@gmail.com',
//     phone: '321-468-8887',
//   },
// ];

const DisplayBookClientsList = () => {
  const { error, loading, data } = useGetBookClientsQuery();
  console.log("BookClientsList:", { error, data, loading });
    if (error) return <ErrorHasOccurredComponent />
    if (loading) return <Loading />
  return (
    <div >
     <p>List goes here</p>
     <table>
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
  {data.bookClients.map(client => {
    return (
      <tr key={client.id}>
        <tr>{client.id}</tr>
        <tr>{client.name}</tr>
        <tr>{client.email} </tr>
        <tr>{client.phone} </tr>
        </tr>

    );
  })}
</tbody>
     </table>
    </div>
  );
}

export default DisplayBookClientsList;