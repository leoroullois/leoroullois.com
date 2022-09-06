import Layout from '@layout/layout';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const {pathname} = useRouter();
  console.log({pathname});
  const type = 'main';
  return (
    <Layout type={type}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
