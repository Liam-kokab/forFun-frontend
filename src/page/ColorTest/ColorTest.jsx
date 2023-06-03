import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import TextField from '@mui/material/TextField';
import { HexColorPicker } from 'react-colorful';
import Layout from '../../components/Layout/Layout';
import './ColorTest.scss';

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

const ColorTest = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <Layout color={color}>
      <div className="color-test-page-container">
        <HexColorPicker color={color} onChange={setColor} />
        <TextField value={color} onChange={({ target }) => setColor(target.value)} />
      </div>
    </Layout>
  );
};

export default ColorTest;
