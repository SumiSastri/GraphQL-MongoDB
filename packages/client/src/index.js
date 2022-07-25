import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Apollo client and error logging
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// apollo client  and error initialisation
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          books: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          authors: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          bookClients: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          bookProjects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          
        },
      },
    },
  })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
