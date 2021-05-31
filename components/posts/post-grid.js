import PostItem from './post-item';
import classes from './post-grid.module.css';

const PostGrid = (props) => {
  const { posts } = props;

  return <ul className={classes.grid}>
    {post.map(post => <PostItem />)}
  </ul>
}

export default PostGrid;
