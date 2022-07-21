import React from 'react';


import './App.css';
import BooksIndex from './content-pages/books/BooksIndex';
import BooksClientsIndex from './content-pages/booksClients/BooksClientsIndex';
import BooksProjectsIndex from './content-pages/booksProjects/BooksProjectsIndex';

function App() {
  return (  
    <div className="App">   
      <h1>MERN Stack with GraphQL-Apollo Server</h1>
      <BooksIndex/>
      <BooksClientsIndex/>
      <BooksProjectsIndex/>
    </div>
  );
}

export default App;
