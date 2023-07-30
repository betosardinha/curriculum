import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import NotFound from 'pages/NotFound';
import PostTemplate from 'components/PostTemplate';
import DefaultPage from 'components/DefaultPage';

import posts from 'data/posts.json';

import styles from './Post.module.scss';

function Post() {
  const params = useParams();
  const currentPost = posts.find((post) => post.id === Number(params.id));

  if (!currentPost) {
    return <NotFound />;
  }

  return (
    <DefaultPage>
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
    </DefaultPage>
  );
}

export default Post;
