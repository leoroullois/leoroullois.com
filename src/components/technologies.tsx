import {competences} from '@lib/data';
import React, {FC} from 'react';
import Competence from './cards/competence';
interface IProps {
  category: 'Web' | 'API & Database' | 'Tools & other';
}

const Technologies: FC<IProps> = ({category}) => {
  return (
    <div className='flex flex-col gap-y-5'>
      <h3 className='font-semibold text-2xl'>{category}</h3>
      <div className='flex flex-wrap gap-x-3 gap-y-5'>
        {competences
          .filter((competence) => competence.category === category)
          .map((props, i) => (
            <Competence key={i} {...props} />
          ))}
      </div>
    </div>
  );
};

export default Technologies;
