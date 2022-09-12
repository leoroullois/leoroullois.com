import Bars from '@components/_common/bars';
import Wrapper from '@components/_common/wrapper';
import React from 'react';

const About = () => {
  return (
    <section className='py-5'>
      <Wrapper className='flex-col gap-y-5'>
        <h2 className='text-3xl font-semibold'>About me</h2>
        <Bars />
        <div className="grid gap-5 auto-rows-auto grid-cols-3">
          <p className='col-span-2'>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <div className='bg-indigo-500'>RUBIKS CUBE</div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
