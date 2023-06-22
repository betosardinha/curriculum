import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './MenuLink.module.scss';

function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive && styles.active}
      `}
      to={to}
    >
      {children}
    </NavLink>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
