import React from 'react';

import Circle from 'assets/circle.png';
import MyPicture from 'assets/my-picture.png';

import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Olá, Mundo!</h1>
        <p className={styles.paragraph}>
          {/* eslint-disable-next-line */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero quis dolor egestas imperdiet. Cras vestibulum orci non nunc tristique sagittis. Suspendisse vulputate a diam et molestie.
        </p>
      </div>

      <div className={styles.images}>
        <img className={styles.circle} src={Circle} alt="" aria-hidden />
        <img className={styles.picture} src={MyPicture} alt="My profile picture" aria-hidden />
      </div>
    </div>
  );
}

export default Banner;
