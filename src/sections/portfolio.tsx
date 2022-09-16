import References from '@components/cards/references';
import Bars from '@components/_common/bars';
import Title from '@components/_common/title';
import Wrapper from '@components/_common/wrapper';
import {references} from '@lib/data';
import clsx from 'clsx';
import React, {FC} from 'react';

const Portfolio: FC = () => {
  return (
    <section id="portfolio" className='bg-gray-200 py-12'>
      <Wrapper className='flex-col gap-y-12'>
        <div className='flex flex-col gap-y-5'>
          <Title theme='pink' as='h2'>
            Portoflio
          </Title>
          <h2 className='text-center text-3xl font-serif font-semibold'>
            Développement front-end
          </h2>
          <Bars align='center' theme='pink' />
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
