import Button from '@components/button';
import Bars from '@components/_common/bars';
import Wrapper from '@components/_common/wrapper';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className='py-5'>
      <Wrapper className='flex-col gap-y-5'>
        <h2 className='text-3xl font-serif font-semibold'>Work together</h2>
        <Bars align='left' theme='blue' />
        <p>
          You have a project and you want to work with me? Do not hesitate to
          contact me.
        </p>
        <div className='flex flex-wrap gap-5'>
          <Button type='primary' href="/contact">Contact form</Button>
          <Button type='secondary' href="mailto:contact@leoroullois.com">contact@leoroullois.com</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
