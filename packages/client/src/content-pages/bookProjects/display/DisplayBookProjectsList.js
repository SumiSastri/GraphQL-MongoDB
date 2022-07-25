import { useQuery } from '@apollo/client';

// data
// import { GET_BOOK_PROJECTS } from '../../../utils/queries/queries';

// common
// import Loading from "../../common-components/loading/Loading";
// import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";
import DisplayBookProjectsCard from './DisplayBookProjectsCard';

const bookProjects = [
  {
    id: '1',
    bookClientId: '1',
    name: 'Authors Promotions',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '2',
    bookClientId: '2',
    name: 'Books Promotions',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '3',
    bookClientId: '3',
    name: 'Backlist Managagement',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '4',
    bookClientId: '4',
    name: 'Digitial Editions Promotions',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'Done',
  },
  {
    id: '5',
    bookClientId: '5',
    name: 'Second Rights Auction Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
];



export default function DisplayBookProjectsList({bookProject}) {
  // const { loading, error, data } = useQuery(GET_BOOK_PROJECTS);
  // if (error) return <ErrorHasOccurredComponent />
  // if (loading) return <Loading />

  return (
    <>
      {bookProjects.length > 0 ? (
        <div className='row mt-4'>
          {bookProjects.map((bookProject) => (
          <div>
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

