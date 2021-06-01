import ReactMardown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-starting-with-nextjs1',
  title: 'Getting started with NextJS',
  image: 'images-1.jpg',
  date: '2021-05-06',
  content: '# This is a first post'
}

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return(
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMardown>{DUMMY_POST.content}</ReactMardown>
    </article>
  );
}

export default PostContent;
