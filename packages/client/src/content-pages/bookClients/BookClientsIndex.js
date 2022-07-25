import "../.././App.css";
import DisplayBookClientsList from "./display/DisplayBookClientsList";
import AddBookClient from "./forms/AddBookClient";

function BookClientsIndex() {
  return (
    <div>
      <h2>Book Client's Page</h2>
       <AddBookClient/>
      <DisplayBookClientsList />
    </div>
  );
}

export default BookClientsIndex;
