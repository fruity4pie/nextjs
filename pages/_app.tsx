import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';

import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import Layout from '../components/layout';

const MYBLOG: string = 'My Blog';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={pageProps.meta ?? MYBLOG} />
        <title>{pageProps.title ?? MYBLOG}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CssBaseline>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
