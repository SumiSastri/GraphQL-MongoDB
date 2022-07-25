import { useQuery } from '@apollo/client';

// data
import { GET_BOOK_PROJECTS } from '../../../utils/queries/queries';
// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBookProjectsCard from './DisplayBookProjectsCard';

export default function DisplayBookProjectsList({bookProject}) {
  const { loading, error, data } = useQuery(GET_BOOK_PROJECTS);
  if (error) return <ErrorHasOccurredComponent />
  if (loading) return <Loading />

  return (
    <>
      {data.bookProjects.length > 0 ? (
        <div className='row mt-4'>
          {data.bookProjects.map((bookProject) => (
          <div key= {bookProject.id}>
          <DisplayBookProjectsCard key= {bookProject.id} bookProject={bookProject}  />
              </div>
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

