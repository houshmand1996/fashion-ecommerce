import { FC } from 'react';
import { Footer, Header } from '../../layout';
import { LayoutType } from '../layout';

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div className="h-full w-full flex-1 flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
