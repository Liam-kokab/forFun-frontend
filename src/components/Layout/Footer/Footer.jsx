import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Cottage from '@mui/icons-material/Cottage';
import FilterBAndW from '@mui/icons-material/FilterBAndW';
import Message from '@mui/icons-material/Message';
import AccountBox from '@mui/icons-material/AccountBox';
import People from '@mui/icons-material/People';
import Tooltip from '@mui/material/Tooltip';
import './Footer.scss';

const BUTTONS = [
  { icon: <Cottage />, path: '/', label: 'Home' },
  { icon: <AccountBox />, path: '/profile', label: 'My Niks' },
  { icon: <FilterBAndW />, path: '/add', label: 'People Niks' },
  { icon: <People />, path: '/people', label: 'People' },
  { icon: <Message />, path: '/message', label: 'Message' },
];

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = window.location;

  return (
    <div className="footer-container">
      {
        BUTTONS.map(({ icon, path, label }) => (
          <Tooltip title={label} key={path}>
            <IconButton onClick={() => navigate(path)} className={`home-button ${pathname === path ? ' selected' : ''}`}>
              {icon}
            </IconButton>
          </Tooltip>
        ))
      }
    </div>
  );
};

Footer.defaultProps = {

};

Footer.propTypes = {

};

export default Footer;
