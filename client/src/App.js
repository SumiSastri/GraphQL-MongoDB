// import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import BookList from './pages/BookList';
import AddBook from './forms/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>MERN Stack with GraphQL-Apollo Server</h1>
      <BookList/>
      <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
