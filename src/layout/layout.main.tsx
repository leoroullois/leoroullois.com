import {FC, PropsWithChildren} from 'react';
import NavBar from '@components/navbar';
import Header from '@components/header';
import Footer from '@components/footer';

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen relative bg-gray-50 text-slate-900 overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
