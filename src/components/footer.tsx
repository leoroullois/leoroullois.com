import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Link href='/contact'>
        <a>contact@leoroullois.com</a>
      </Link>
      <p>© 2022 Léo Roullois</p>
    </footer>
  );
};

export default Footer;
