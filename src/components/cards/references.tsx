import Skill from '@components/_common/skill';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import React, {FC, MouseEventHandler} from 'react';
import { Fade } from 'react-awesome-reveal';
import {IoLogoGithub} from 'react-icons/io5';
interface IProps {
  title: string;
  year: number;
  description: string;
  skills: string[];
  url: string;
}

const References: FC<IProps> = ({title, year, description, skills, url}) => {
  const router = useRouter();

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <article
      className={clsx(
        'cursor-hover',
        'flex flex-col gap-y-5 bg-gray-100 rounded-lg shadow-md p-5 duration-100 cursor-pointer',
        'hover:shadow-xl'
      )}
      onClick={handleClick}
    >
      <Fade triggerOnce>
        
      <div className={clsx('flex items-center flex-wrap gap-x-3')}>
        <IoLogoGithub className='w-14 h-14 bg-gray-200 text-slate-900 p-3 rounded-full shadow' />
        <h3 className='text-2xl font-bold'>{title}</h3>
        <h4 className='text-slate-900/80 text-sm mt-2'>{`/ ${year}`}</h4>
      </div>
      <p className='text-slate-900/80'>{description}</p>
      <div className='flex flex-wrap gap-8'>
        {skills.map((skill, i) => (
          <Skill key={i}>{skill}</Skill>
        ))}
      </div>
      </Fade>
    </article>
  );
};

export default References;
