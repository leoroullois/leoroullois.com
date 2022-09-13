import React, {FC, PropsWithChildren} from 'react';
import MainLayout from './layout.main';

interface IProps {
  type: string;
}

const Layout: FC<PropsWithChildren<IProps>> = ({children, type}) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
