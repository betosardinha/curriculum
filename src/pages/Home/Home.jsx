import React from 'react';

import Banner from 'components/Banner';
import Post from 'components/Post';

import posts from 'data/posts.json';

import styles from './Home.module.scss';

function Home() {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
