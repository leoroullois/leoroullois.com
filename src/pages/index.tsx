import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';
import Cursor from '@components/cursor';
import StatusBar from '@components/status-bar';
import Portfolio from '@sections/portfolio';
import Hero from '@sections/hero';
import About from '@sections/about';
import Contact from '@sections/contact';
import Skills from '@sections/skills';

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
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Home;
