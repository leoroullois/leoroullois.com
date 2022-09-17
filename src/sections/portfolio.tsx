import References from '@components/cards/references';
import Bars from '@components/_common/bars';
import BgSvg from '@components/_common/bg-svg';
import Title from '@components/_common/title';
import Wrapper from '@components/_common/wrapper';
import {references} from '@lib/data';
import clsx from 'clsx';
import React, {FC} from 'react';
import {Fade} from 'react-awesome-reveal';

const Portfolio: FC = () => {
  return (
    <section id='portfolio' className='relative py-12'>
      <BgSvg className='text-gray-200 transform -translate-y-1/2 left-0 -translate-x-1/2' />
      <Wrapper className='relative flex-col gap-y-12'>
        <div className='flex flex-col gap-y-5'>
          <Title theme='blue' as='h2'>
            Portoflio
          </Title>
          <h2 className='text-center text-3xl font-serif font-semibold'>
            Développement front-end
          </h2>
          <Bars align='center' theme='blue' />
        </div>
        <div
          className={clsx(
            'grid gap-y-8 grid-cols-1 auto-rows-auto',
            'sm:grid-cols-2 sm:gap-x-5'
          )}
        >
          {references.map((props, i) => (
            <References key={i} {...props} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
