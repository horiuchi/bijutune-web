import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout';
import { useEffect } from 'react';

const RecoilApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <RecoilRoot>
      <CssBaseline />
      <Head>
        <title>びじゅチューン</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default RecoilApp;
