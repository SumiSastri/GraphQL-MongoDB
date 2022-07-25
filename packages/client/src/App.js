import React from 'react';


import './App.css';
import BooksIndex from './content-pages/books/BooksIndex';
import BookClientsIndex from './content-pages/bookClients/BookClientsIndex';
import BookProjectsIndex from './content-pages/bookProjects/BookProjectsIndex';

function App() {
  return (  
    <div className="App">   
      <h1>MERN Stack with GraphQL-Apollo Server</h1>
      <BooksIndex/>
      <BookClientsIndex/>
      <BookProjectsIndex/>
    </div>
  );
}

export default App;
