import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import {email} from 'src/lib/constants';

import Button from '@components/button';
import Wrapper from '@common/wrapper';
import {Fade} from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className='bg-white shadow-sm w-full overflow-hidden'>
      <Wrapper className={clsx('flex flex-col gap-x-24', 'lg:flex-row')}>
        <div
          className={clsx(
            'flex flex-col justify-around w-full py-5  gap-y-6 max-w-5xl',
            'lg:w-auto'
          )}
        >
          <div className='flex flex-col gap-y-4'>
            <Fade triggerOnce cascade damping={0.5}>

            <h1 className='flex text-xl font-bold'>
              Hello, I&apos;m Léo Roullois.
            </h1>
            <h2 className={clsx('text-3xl font-bold', "sm:text-5xl")}>
              Freelance web developer and student at{' '}
              <span className='text-blue-600'>ESIEE Paris</span>
            </h2>
            <p className='text-lg text-slate-900/80'>
              ESIEE Paris student & freelance web developer (React / Next.js).
            </p>
            </Fade>
          </div>
          <div className={clsx('flex flex-col gap-6 w-full', "sm:flex-row")}>
            <Fade>

            <Button href="#contact" type='primary'>{email}</Button>
            <Button href="#about" type='secondary'>Learn more</Button>
            </Fade>
          </div>
        </div>
        <div
          className={clsx(
            'relative z-20 flex flex-1 justify-center items-center bg-slate-900 w-full py-12',
            'lg:w-96',
            "after:content-['']  after:bg-slate-900 after:-skew-x-12 after:block after:-left-10 after:top-0 after:bottom-0 after:-right-[4000px] after:-translate-x-14 after:absolute after:z-10"
          )}
        >
          <div className='relative z-20 flex h-52 w-52 rounded-full overflow-hidden border-8 border-white'>
            <Image
              src='/leo-roullois.png'
              layout='fill'
              objectFit='cover'
              alt='Profile picture'
              loading='lazy'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
