import type { ReactNode } from 'react';
import Link from 'next/link';
import { AppBar, Container, Toolbar } from '@mui/material';

import { StyledLink } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link href="/">
            <StyledLink href="/">My Blog</StyledLink>
          </Link>
          <Link href="/posts">
            <StyledLink href="/posts">Posts</StyledLink>
          </Link>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
