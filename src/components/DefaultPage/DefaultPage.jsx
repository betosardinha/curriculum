import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Banner from 'components/Banner';

function DefaultPage({ children }) {
  return (
    <main>
      <Banner />
      <Outlet />
      {children}
    </main>
  );
}

DefaultPage.propTypes = {
  children: PropTypes.node,
};

DefaultPage.defaultProps = {
  children: null,
};

export default DefaultPage;
