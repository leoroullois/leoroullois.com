import Image from 'next/image';
// import React from 'react';

import logo from '@public/root-me2.svg';

const RootMe = () => {
  const n = 26;
  return <Image src={logo} height={n} width={n} alt='Root-Me' />;
};

export default RootMe;
