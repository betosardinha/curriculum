import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostCard.module.scss';

function PostCard({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.cover}
        src={`/assets/images/${post.id}/cover.png`}
        alt={`Cover of post ${post.id}`}
      />
      <h2 className={styles.title}>{post.title}</h2>
      <button className={styles.readbutton} type="button">Ler</button>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
