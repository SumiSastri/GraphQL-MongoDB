import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

// data
import { GET_BOOK_PROJECT_ID} from "../../../utils/queries/queries";
import { UPDATE_BOOK_PROJECT } from "../../../utils/mutations/bookProjectMutations";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";

const UpdateBookProjectForm = ({ bookProject}) => {
    const { loading, error, data } = useQuery(GET_BOOK_PROJECT_ID, {
      variables: { id:bookProject.id },
    });
  const [name, setName] = useState(bookProject.name);
  const [description, setDescription] = useState(data.bookProject.description);
//   switch required for enum
  const [status, setStatus] = useState(() => {
    switch (data.bookProject.status) {
      case "Not Started":
        return "new";
      case "In Progress":
        return "progress";
      case "Completed":
        return "completed";
      default:
        throw new Error(`Unknown status: ${data.bookProject.status}`);
    }
  });

// load book clients
// const { loading, error, data } = useQuery(GET_BOOK_CLIENTS);
// console.log(data,error, loading, "update book project form with book clients data");
// const [bookClientId, setBookClientId] = useState("");

  const [updateBookProject] = useMutation(UPDATE_BOOK_PROJECT, {
    variables: { id: bookProject.id, name, description, status },
    refetchQueries: [{ query: GET_BOOK_PROJECT_ID, variables: { id: bookProject.id } }],
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status)  {
      return alert("Please fill out all fields");
    }
    // name,
    // description,
    // bookClientId,
    // status,
    updateBookProject(name, description, status);

    const resetFormFields = () => {
        setName("");
        setDescription("");
        setStatus("new");
      };
      resetFormFields()
  };

  if (loading) return <Loading />;
  if (error) return <ErrorHasOccurredComponent />;

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
{/* 
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
                    </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateBookProjectForm;