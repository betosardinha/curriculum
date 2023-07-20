import React from 'react';

import PostCard from 'components/PostCard';

import posts from 'data/posts.json';

import styles from './Home.module.scss';

function Home() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
