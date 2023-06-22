import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import styles from './MenuLink.module.scss';

function MenuLink({ children, to }) {
  const location = useLocation();

  return (
    <Link
      className={`
        ${styles.link}
        ${location.pathname === to ? styles.active : ''}
      `}
      to={to}
    >
      {children}
    </Link>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
