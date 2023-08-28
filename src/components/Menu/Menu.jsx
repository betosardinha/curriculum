import React from 'react';

import MenuLink from 'components/MenuLink';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logotype}>
          <div className={styles.logo}>S</div>
          <span className={styles.text}><b>Alberto</b></span>
          <span className={styles.text}>Sardinha</span>
        </div>

        <div className={styles.menulinks}>
          <MenuLink to="/">
            Sobre Mim
          </MenuLink>

          <MenuLink to="/about">
            Currículo
          </MenuLink>

          <MenuLink to="/about">
            Portifólio
          </MenuLink>

          <MenuLink to="/about">
            Contato
          </MenuLink>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
