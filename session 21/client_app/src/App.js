import React from 'react';
import logo from './logo.svg';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './config/gql_config';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
