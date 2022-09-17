import LoadingScreen from '@components/loading-screen';
import Layout from '@layout/layout';
import type {AppProps} from 'next/app';
import {usePageLoading} from 'src/hooks/use-page-loading';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const type = 'main';

  const [isLoading] = usePageLoading();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout type={type}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
