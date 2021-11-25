import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h1">Blog</Typography>
      <Typography variant="h2">About Blog</Typography>
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Container>
  );
};

//No idea what to fetch and revalidate here

// export async function getStaticProps() {
//   return {
//     props: {
//       smth: response?.data?.length ?? '',
//     },
//     revalidate: 300,
//   };
// }

export default Home;
