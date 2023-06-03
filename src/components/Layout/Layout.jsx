import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../providers/GlobalState';
import Login from './Login/login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.scss';

const Layout = ({ children, loading, color }) => {
  const { token, userId } = useGlobalState();

  if (!token || !userId) return <Login />;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="layout-container" style={{ '--color': color }}>
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
  color: '#646cff',
};

Layout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  color: PropTypes.string,
};

export default Layout;
