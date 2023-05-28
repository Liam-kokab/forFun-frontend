import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import './People.scss';

const GET_USERS = gql`
  query Query {
    user {
      email
      id
      name
      token
    }
  }
`;

const People = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="people-page-container">
        <h1>People</h1>
      </div>
    </Layout>
  );
};

export default People;
