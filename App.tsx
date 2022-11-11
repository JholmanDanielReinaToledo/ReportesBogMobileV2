import {ApolloProvider} from '@apollo/client';
import React from 'react';
import client from './src/apollo/client';
import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
