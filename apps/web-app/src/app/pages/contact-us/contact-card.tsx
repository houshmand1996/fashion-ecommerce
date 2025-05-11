import { Button, cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC, ReactNode, SVGProps } from 'react';

type ContactCardType = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  buttonText?: string;
  className?: string;
};
export const ContactCard: FC<ContactCardType> = ({
  Icon,
  children,
  buttonText,
  className,
}) => {
  return (
    <div
      className={cn(
        'w-[344.594px]  flex flex-col items-center gap-4',
        className
      )}
    >
      <Icon className="w-[50px] h-[50px] text-secondary" />
      <p className="text-[16px]/[20px] text-body">{children}</p>
      {buttonText && (
        <Button size={'sm'} state={'primary'} className="uppercase">
          {buttonText}
        </Button>
      )}
    </div>
  );
};
