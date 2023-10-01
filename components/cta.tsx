import { Button } from '@react-email/components';
import { cn } from '../utils';

type Props = React.ComponentProps<typeof Button>;
const Cta = ({ target = '_blank', className, ...props }: Props) => (
  <Button
    {...props}
    className={cn(
      'py-[18px] px-[40px]',
      'rounded-[2px]',
      'font-bold leading-none no-underline text-white !text-body',
      'bg-accent',
      className,
    )}
    target={target}
    rel='noreferrer noopener'
  />
);

export default Cta;
