import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import './Add.scss';

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

const Add = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="add-page-container">
        <h1>Add</h1>
      </div>
    </Layout>
  );
};

export default Add;
