import ReactMardown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  return(
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMardown>{post.content}</ReactMardown>
    </article>
  );
}

export default PostContent;
