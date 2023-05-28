import React, { useMemo } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import { useGlobalState } from './GlobalState';

const Apollo = ({ children }) => {
  const { token } = useGlobalState();

  const client = useMemo(() => new ApolloClient({
    uri: `http://${window.location.hostname}:4000/graphql/`,
    cache: new InMemoryCache(),
    headers: { Authorization: token },
  }), [token]);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

Apollo.defaultProps = {
  children: null,
};

Apollo.propTypes = {
  children: PropTypes.node,
};

export default Apollo;
