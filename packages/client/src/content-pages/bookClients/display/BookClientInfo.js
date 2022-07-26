import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

const BookClientInfo = ({ bookClient }) => {
  console.log(bookClient, "book client data");
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {bookClient.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {bookClient.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {bookClient.phone}
        </li>
      </ul>
    </>
  );
};

export default BookClientInfo;
