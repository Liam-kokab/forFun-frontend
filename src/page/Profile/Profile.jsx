import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import './Profile.scss';

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

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="profile-page-container">
        <h1>Profile</h1>
      </div>
    </Layout>
  );
};

export default Profile;
