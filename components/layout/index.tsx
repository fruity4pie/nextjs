import type { ReactNode } from 'react';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { StyledLink } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link href="/">
            <StyledLink href="/">Home</StyledLink>
          </Link>
          <Link href="/blog">
            <StyledLink href="/blog">Blog</StyledLink>
          </Link>
          <Typography>{props.blogPostsLength}</Typography>
        </Toolbar>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
