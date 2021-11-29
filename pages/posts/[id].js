import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
};

const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Loading</div>;
  }
  return (
    <Layout title={post.title}>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link href='/blog-page'>
        <div className='flex cursor-pointer mt-12'>
          <svg
            className='w-6 h-6 mr-3'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z'
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default PostDetail;
