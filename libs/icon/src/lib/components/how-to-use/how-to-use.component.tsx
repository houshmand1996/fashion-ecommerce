/* eslint-disable import/no-unresolved */
// * Import Types
import type { FC } from 'react';
import { useState } from 'react';

import { ArrowLeftIcon } from '@tali/icon';

import * as Collapsible from '@radix-ui/react-collapsible';

export const HowToUseComponent: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="flex self-center justify-between">
        <Collapsible.Trigger asChild>
          <div className="flex justify-between gap-3 absolute top-8 left-5">
            <h2 className="text-xl font-semibold mb-4">How to use ?</h2>
            <button className="inline-flex items-center justify-center rounded-full h-6 w-6 text-violet-700 bg-white hover:bg-violet-300 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none shadow-md ">
              {open ? (
                <ArrowLeftIcon />
              ) : (
                <ArrowLeftIcon style={{ transform: 'rotate(180deg)' }} />
              )}
            </button>
          </div>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <div className="flex gap-32 align-sub justify-end flex-row-reverse mb-8 absolute top-16 left-5 w[700px]">
          <div className="w-full p-4 bg-white border border-gray-300 mb-4 md:mb-0  rounded-lg shadow-lg">
            <p>To use an icon, import it from the icon package:</p>
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {"import { IconName } from '@tali/icon';"}
            </pre>
            <p className="mt-4">Then use it in your JSX:</p>
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {"<IconName className='text-gray-700 text-sm'/>"}
            </pre>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
