import {FC, PropsWithChildren} from 'react';
import NavBar from '@components/navbar';
import Header from '@components/header';

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="bg-gray-50 text-slate-900">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
