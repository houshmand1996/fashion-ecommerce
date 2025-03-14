import { Header } from '../../layout';
import { LayoutType } from '../layout';

const OnlyHeaderLayout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default OnlyHeaderLayout;
