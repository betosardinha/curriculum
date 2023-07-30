import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import NotFound from 'pages/NotFound';
import PostTemplate from 'components/PostTemplate';
import DefaultPage from 'components/DefaultPage';
import PostCard from 'components/PostCard';

import posts from 'data/posts.json';

import styles from './Post.module.scss';

function Post() {
  const params = useParams();
  const currentPost = posts.find((post) => post.id === Number(params.id));
  const recommendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

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

        <h2 className={styles.recommendedpoststitle}>
          Outros posts que você pode gostar
        </h2>

        <ul className={styles.recommendedposts}>
          {recommendedPosts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>

      </PostTemplate>
    </DefaultPage>
  );
}

export default Post;
