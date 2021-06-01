import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-starting-with-nextjs1',
    title: 'Getting started with NextJS',
    image: 'images-1.jpg',
    excerpt: 'This city is amazing for life, work & fun',
    date: '2021-05-06',
  },
  {
    slug: 'getting-starting-with-nextjs2',
    title: 'Getting started with NextJS',
    image: 'images-1.jpg',
    excerpt: 'This city is amazing for life, work & fun',
    date: '2021-05-06',
  },
  {
    slug: 'getting-starting-with-nextjs3',
    title: 'Getting started with NextJS',
    image: 'images-1.jpg',
    excerpt: 'This city is amazing for life, work & fun',
    date: '2021-05-06',
  },
  {
    slug: 'getting-starting-with-nextjs4',
    title: 'Getting started with NextJS',
    image: 'images-1.jpg',
    excerpt: 'This city is amazing for life, work & fun',
    date: '2021-05-06',
  }
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS}/>;
}

export default AllPostsPage;
