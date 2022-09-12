import React, {FC} from 'react';

const LoadingScreen: FC = () => {
  return <div className='flex justify-center items-center fixed inset-0 bg-blue-500'>
    <div className='flex h-16 w-16 border-4 border-white/20 border-l-white rounded-full animate-spin'></div>
  </div>;
};

export default LoadingScreen;
