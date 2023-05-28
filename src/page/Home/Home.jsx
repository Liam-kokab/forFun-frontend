import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import './Home.scss';

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

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="home-page-container">
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
