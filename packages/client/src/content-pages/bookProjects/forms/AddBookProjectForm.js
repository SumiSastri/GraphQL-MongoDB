import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";

// data
import {useGetBookProjectsQuery} from "../../../utils/hooks/useGetBookProjectsQuery"
import { CREATE_BOOK_PROJECT } from "../../../utils/mutations/bookProjectMutations";
import {
  GET_BOOK_CLIENTS,
  // GET_BOOK_PROJECTS,
} from "../../../utils/queries/queries";


const AddBookProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // use the enum value
  const [status, setStatus] = useState("new");
  
  // load book clients
  const { loading, error, data } = useQuery(GET_BOOK_CLIENTS);
  console.log(data, "GET BOOK CLIENTS data");
  const [bookClientId, setBookClientId] = useState("");

  // const [addBookProject] = useMutation(CREATE_BOOK_PROJECT, {
  //   variables: { name, description, bookClientId, status },
  //   update(cache, { data: { addBookProject } }) {
  //     const { bookProjects } = cache.readQuery({ query: GET_BOOK_PROJECTS });
  //     cache.writeQuery({
  //       query: GET_BOOK_PROJECTS,
  //       data: { bookProjects: [...bookProjects, addBookProject] },
  //     });
  //   },
  // });

  const [createBookProject] = useMutation(CREATE_BOOK_PROJECT, {
    variables: {
      name,
      description,
      bookClientId,
      status,
    },
  });

  const { refetch } = useGetBookProjectsQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, description, bookClientId, status, "LOG SUBMIT ADD BOOK PROJECT FORM");

    // simple validation
    if (
      name === "" ||
      description === "" ||
      status === "" ||
      bookClientId === ""
    ) {
      return alert("Please fill in all fields");
    }

    // new payload
    // addBookProject(name, description, bookClientId, status);
    // console.log(name, description, bookClientId, status, "LOG Submit Payload for new project");

    createBookProject(name, description, bookClientId, status);
    console.log(createBookProject, "Log BOOK PROJECT FORM payload");

    // reset after submission
    const resetFormFields = () => {
      setName("");
      setDescription("");
      setStatus("new");
      setBookClientId("");
    };
    resetFormFields();
    refetch();
  };

  if (loading) return null;
  if (error) return "Something Went Wrong";

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#addProjectModal'
          >
            <div className='d-flex align-items-center'>
              <FaList className='icon' />
              <div>Add New Book Project</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addProjectModal'
            aria-labelledby='addProjectModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addProjectModalLabel'>
                    New Book Project
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
                      <label className='form-label'>Project Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Project Description</label>
                      <textarea
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Project Status</label>
                      <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                      </select>
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>
                        Client for the Project
                      </label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={bookClientId}
                        onChange={(e) => setBookClientId(e.target.value)}
                      >
                        <option value=''>Select Book Client</option>
                        {data.bookClients.map((bookClient) => (
                          <option key={bookClient.id} value={bookClient.id}>
                            {bookClient.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-primary'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AddBookProjectForm;
