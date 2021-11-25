import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container, CircularProgress } from '@mui/material';
import axios from 'axios';

import MediaCard from '../../components/mediaCard';
import type { Article } from '../../types';

type PostsPageProps = NextPage & {
  blogPosts: Article[];
};

const PostsPage = ({ blogPosts }: PostsPageProps) => {
  const router = useRouter();

  return (
    <Container>
      {blogPosts.length ? (
        blogPosts.map(({ id, title, desc }) => (
          <MediaCard
            key={id}
            title={title}
            desc={desc}
            onClick={() => {
              router.push(`/blog/${id}`);
            }}
          />
        ))
      ) : (
        <CircularProgress size={75} />
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const response = await axios({ url: `${process.env.SECRET_URL}/blog` });

  if (!Array.isArray(response.data)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blogPosts: response.data,
    },
  };
}

export default PostsPage;
