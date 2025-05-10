import { FC } from 'react';
import { Footer, Header } from '../../layout';
import { LayoutType } from '../layout';

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <div className="h-full w-full min-h-svh flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
