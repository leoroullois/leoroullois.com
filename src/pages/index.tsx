import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';
import StatusBar from '@components/status-bar';
import Portfolio from '@sections/portfolio';
import Hero from '@sections/hero';
import About from '@sections/about';
import Contact from '@sections/contact';
import Skills from '@sections/skills';
import Start from '@components/_common/start';
import Recommandation from '@sections/recommandation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Léo ROULLOIS - Cybersecurity & development</title>
      </Head>
      <Start />
      <StatusBar />
      <main className='flex bg-slate-900 text-gray-50 flex-1 flex-col w-full h-full min-h-screen'>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Recommandation />
        <Contact />
      </main>
    </>
  );
};

export default Home;
