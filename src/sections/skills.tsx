import Competence from '@components/cards/competence';
import Technologies from '@components/technologies';
import Bars from '@components/_common/bars';
import Title from '@components/_common/title';
import Wrapper from '@components/_common/wrapper';
import {competences} from '@lib/data';
import clsx from 'clsx';
import React from 'react';

const Skills = () => {
  return (
    <section
      className={clsx(
        'relative z-30 py-5 bg-slate-900 text-gray-50 mt-[30px]',
        'after:z-10 after:absolute after:inset-0 after:w-0 after:h-0',
        'after:border-0 after:-top-[30px] after:border-b-[30px] after:border-l-[100vw]',
        'after:border-transparent after:border-b-slate-900'
      )}
    >
      <Wrapper className='relative z-20 gap-y-5 flex-col'>
        <Title as='h2'>My skills</Title>
        <h2 className='text-center text-3xl font-serif font-semibold'>
          Which technologies do I use?
        </h2>
        <Bars theme='blue' align='center' />
        <div className='flex flex-col gap-y-8'>
          <Technologies category='Web' />
          <Technologies category='API & Database' />
          <Technologies category='Tools & other' />
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
