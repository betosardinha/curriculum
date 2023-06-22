import React from 'react';

import MenuLink from 'components/MenuLink';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
        <MenuLink to="/">
          Início
        </MenuLink>

        <MenuLink to="/about">
          Sobre
        </MenuLink>
      </nav>
    </header>
  );
}

export default Menu;
