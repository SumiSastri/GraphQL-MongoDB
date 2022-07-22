// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";

// components
import Loading from "../../common-components/loading/Loading";
import ErrorHasOccurredComponent from "../../common-components/errors/ErrorHasOccurredComponent";


const DisplayBookClientsList = () => {
  const { error, loading, data } = useGetBookClientsQuery();
  console.log("BookClientsList:", { error, data, loading });
    if (error) return <ErrorHasOccurredComponent />
    if (loading) return <Loading />
  return (
    <div >
     <p>list goes here</p>
    </div>
  );
}

export default DisplayBookClientsList;