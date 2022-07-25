export default function DisplayBookProjectsCard({ bookProject }) {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{bookProject.name}</h5>
  
              <a className='btn btn-light' href={`/projects/${bookProject.id}`}>
                View
              </a>
            </div>
            <p className='small'>
              Status: <strong>{bookProject.status}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }