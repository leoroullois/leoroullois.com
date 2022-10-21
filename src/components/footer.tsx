import Link from 'next/link';
import React from 'react';
import Wrapper from './_common/wrapper';

const Footer = () => {
  return (
    <footer className='py-5 bg-gray-900 text-gray-50'>
      <Wrapper className='flex-col items-center gap-y-5'>
        <Link href='/contact'>
          <a className='cursor-hover hover:underline underline-offset-2'>contact@leoroullois.com</a>
        </Link>
        <p className='font-bold'>© 2022 Léo Roullois</p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
