import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../providers/GlobalState';
import Login from './Login/login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.scss';

const Layout = ({ children, loading }) => {
  const { token, userId } = useGlobalState();

  if (!token || !userId) return <Login />;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: null,
  loading: false,
};

Layout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default Layout;
