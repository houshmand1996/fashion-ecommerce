import { cn } from '../../lib';
import { tagVariants } from './tag.variant';
import { tagProps } from './tag.type';
function Tag({ className, styles, ...props }: tagProps) {
  return (
    <button className={cn(tagVariants({ styles }), className)} {...props} />
  );
}

export { Tag, tagVariants };
