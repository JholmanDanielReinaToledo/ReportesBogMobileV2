import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://52.87.242.42:5000/back/graphql',
  cache: new InMemoryCache(),
});

export default client;
