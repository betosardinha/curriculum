import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostTemplate.module.scss';

function PostTemplate({ cover, title, children }) {
  return (
    <article className={styles.container}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </article>
  );
}

PostTemplate.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PostTemplate;
