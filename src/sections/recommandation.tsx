import React from 'react';
import Wrapper from '@common/wrapper';
import Image from 'next/image';
import clsx from 'clsx';
import {VscQuote} from 'react-icons/vsc';

const recommandation = () => {
  return (
    <section className='pt-16  overflow-hidden'>
      <Wrapper
        className={clsx(
          'flex-col gap-12 justify-between items-center pb-5 border-b border-b-slate-900/10',
          'sm:flex-row'
        )}
      >
        <div className='min-w-max'>
          <Image
            src='https://dam.malt.com/wopmlethfftntgyrn94v?gravity=face&func=face&face_margin=60&w=440&h=440&force_format=webp'
            alt='Sylvain Gibaud'
            width={150}
            height={150}
            loading='lazy'
            className='rounded-full'
          />
        </div>
        <div className='relative flex flex-col justify-evenly gap-y-5'>
          <VscQuote className='absolute -top-20 -left-8 z-10 text-9xl text-pink-500/10' />
          <p className='relative z-20 text-2xl'>
            Léo contributed as a developer on an internal application project
            for a client. Fast, serious and competent. Very nice collaboration,
            I highly recommend Léo!
          </p>
          <p className='relative z-20 text-md font-bold text-pink-500'>
            Sylvain Gibaud
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default recommandation;
