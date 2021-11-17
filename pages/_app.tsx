import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from '../components/layout';

const MYBLOG: string = 'My Blog';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <CssBaseline>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CssBaseline>
    </>
  );
}
