import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import type { Article } from '../../types';

type ArticlePageProps = NextPage & {
  blogData: Article;
};

const ArticlePage = ({ blogData }: ArticlePageProps) => {
  return (
    <Container>
      <Typography variant="h1">{blogData.title}</Typography>
      <Image alt={blogData.title} src={blogData.img} width="250" height="250" />
      <Typography variant="caption">{blogData.desc}</Typography>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios({ url: `${process.env.SECRET_URL}/blog` });

  const paths = response.data.map((blogData: Article) => {
    return {
      params: { slug: blogData.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const response = await axios.get(`${process.env.SECRET_URL}/blog/${slug}`);

  return {
    props: {
      blogData: response.data,
    },
    revalidate: 300,
  };
};

export default ArticlePage;
