import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';
import Hero from '@components/hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Léo ROULLOIS - Portfolio</title>
      </Head>
      <main className='flex flex-col w-full h-full min-h-screen'>
        <Hero />
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </main>
    </>
  );
};

export default Home;
