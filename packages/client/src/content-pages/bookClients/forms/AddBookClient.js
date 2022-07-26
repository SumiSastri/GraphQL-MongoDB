import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";
import { CREATE_BOOK_CLIENT } from "../../../utils/mutations/bookClientMutations";

const AddBookClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createBookClient] = useMutation(CREATE_BOOK_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
  });

  const { refetch } = useGetBookClientsQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log new book-client:", name, phone, email);

    // validation
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields");
    }

    // new payload
    createBookClient(name, phone, email);
    console.log(createBookClient, "BOOK CLIENT PAYLOAD");

    const resetFormFields = () => {
      setName("");
      setEmail("");
      setPhone("");
    };
    resetFormFields();
    refetch();
  };

  // using bootstrap modal
  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add A Book Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addClientModalLabel'>
                Add Book Client
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Phone</label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBookClient;
