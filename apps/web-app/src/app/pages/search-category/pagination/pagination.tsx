import { BackwardIcon, ForwardIcon } from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { Dispatch, SetStateAction } from 'react';

export const Pagination = ({
  inPage,
  setInPage,
  pageInArray,
  page,
}: {
  inPage: number;
  setInPage: Dispatch<SetStateAction<number>>;
  pageInArray: number[];
  page: number;
}) => {
  return (
    <div className="flex w-full justify-center pb-[76.78px] items-center ">
      <div className=" flex gap-3 w-[241px] justify-between">
        <button
          className={inPage !== 1 ? 'visible' : 'invisible'}
          onClick={() => setInPage(inPage - 1)}
        >
          <BackwardIcon className="w-6 h-6 text-[#14142B] fill-none" />
        </button>
        <div className=" flex gap-3">
          {pageInArray.map((ar) => (
            <button
              key={ar}
              className={cn(
                'w-8 h-8   flex justify-center items-center ',
                inPage == ar
                  ? 'bg-body text-off-white'
                  : 'bg-placeholder !bg-opacity-10 text-label'
              )}
              onClick={() => setInPage(ar)}
            >
              <p className=" text-center text-[16px]/[24px]">{ar}</p>
            </button>
          ))}
        </div>
        <button
          className={inPage !== page ? 'visible' : 'invisible'}
          onClick={() => setInPage(inPage + 1)}
        >
          <ForwardIcon className="w-6 h-6 text-[#14142B] fill-none" />
        </button>
      </div>
    </div>
  );
};
