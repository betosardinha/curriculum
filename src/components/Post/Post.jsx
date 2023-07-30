import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import PostTemplate from 'components/PostTemplate';

import posts from 'data/posts.json';

import styles from './Post.module.scss';

function Post() {
  const params = useParams();
  const currentPost = posts.find((post) => post.id === Number(params.id));

  if (!currentPost) {
    return (
      <PostTemplate>
        <div className={styles.post}>
          <h1>Post not found</h1>
        </div>
      </PostTemplate>
    );
  }

  return (
    <PostTemplate
      cover={`/assets/images/${currentPost.id}/cover.png`}
      title={currentPost.title}
    >
      <div className={styles.post}>
        <ReactMarkdown>
          {currentPost.content}
        </ReactMarkdown>
      </div>
    </PostTemplate>
  );
}

export default Post;
