import React from 'react';
import { Outlet } from 'react-router-dom';

import Banner from 'components/Banner';

function DefaultPage() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}

export default DefaultPage;
