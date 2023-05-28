import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import './Message.scss';

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

const Message = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="message-page-container">
        <h1>Message</h1>
      </div>
    </Layout>
  );
};

export default Message;
