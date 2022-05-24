// import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import BooksIndex from './content-pages/books/BooksIndex';


// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>MERN Stack with GraphQL-Apollo Server</h1>
      <BooksIndex/>

    </div>
    </ApolloProvider>
  );
}

export default App;
