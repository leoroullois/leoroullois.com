import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';
import Hero from '@components/hero';
import Cursor from '@components/cursor';
import StatusBar from '@components/status-bar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Léo ROULLOIS - Portfolio</title>
      </Head>
      <Cursor />
      <StatusBar />
      <main className='flex flex-col w-full h-full min-h-screen'>
        <Hero />
        <p className="text-6xl cursor-hover">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
      </main>
    </>
  );
};

export default Home;
