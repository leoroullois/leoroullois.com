import Button from '@components/button';
import Bars from '@components/_common/bars';
import Wrapper from '@components/_common/wrapper';
import React from 'react';

const Contact = () => {
  return (
    <section className='py-5'>
      <Wrapper className='flex-col gap-y-5'>
        <h2>Work together</h2>
        <Bars align="left" theme="blue" />
        <div className='flex gap-x-5'>
          <Button type='primary'>Contact form</Button>
          <Button type='secondary'>contact@leoroullois.com</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
