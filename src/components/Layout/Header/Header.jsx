import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Notifications from '@mui/icons-material/Notifications';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import { gql, useQuery } from '@apollo/client';
import './Header.scss';

const SEARCH = gql`
  query Query($input: String!) {
    userSearch (input: $input, limit: 5) {
      id
      name
      img
    }
      
    postSearch (input: $input, limit: 5) {
      id
      title
      text
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const onChange = ({ target }) => {
    setSearch(target.value);
  };

  // const { data, loading, error } = useQuery(SEARCH, {});

  return (
    <div className="header-container">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        variant="rounded"
        className="avatar"
        sx={{ bgcolor: 'white', color: 'black' }}
      />
      <OutlinedInput
        className="search-input"
        variant="outlined"
        onChange={onChange}
        name="search"
        value={search}
        label=""
        endAdornment={(
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => {}} edge="end">
              <Search />
            </IconButton>
          </InputAdornment>
          )}
      />
      <IconButton onClick={() => navigate('/')} className="home-button">
        <Notifications />
      </IconButton>
    </div>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
