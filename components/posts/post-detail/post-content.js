import PostHeader from './post-header';

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
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
