import React, {FC} from 'react';

import Button from '@components/button';
import Bars from '@components/_common/bars';
import Wrapper from '@components/_common/wrapper';
import clsx from 'clsx';
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import {Fade} from 'react-awesome-reveal';

const Canvas = React.lazy(() => import('@components/threejs/canvas'));

const About: FC = () => {
  return (
    <section id='about' className='py-5'>
      <Wrapper className='flex-col gap-y-5'>
        <Fade triggerOnce>
          <h2 className='text-3xl font-serif font-semibold'>About me</h2>
          <Bars theme='black' align='left' />
        </Fade>
        <div
          className={clsx(
            'grid gap-5 auto-rows-auto grid-cols-1',
            'sm:grid-cols-3'
          )}
        >
          <div className={clsx('flex flex-col justify-around gap-y-5 sm:col-span-2')}>

          <Fade triggerOnce cascade >
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <Button type='primary' href='/cv.pdf'>
              <BsFillFileEarmarkPdfFill className='text-xl mr-6' />
              Téléchargez mon CV !
            </Button>
          </Fade>
          </div>
          <div className='h-96'>
            <Canvas />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
