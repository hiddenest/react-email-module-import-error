import { Heading as BaseHeading } from '@react-email/components';
import { cn } from '../utils';

type Props = React.ComponentProps<typeof BaseHeading> & {
  level?: 1 | 2;
};
const Heading = ({
  level = 1,
  className,
  children,
  ...props
}: Props) => (
  <BaseHeading
    {...props}
    className={cn(
      'm-0 py-[4px]',
      'leading-[1.3] text-primary font-bold',
      'break-keep',
      level === 1 && '!text-h1',
      level === 2 && '!text-h2',
      className,
    )}
  >
    {children}
  </BaseHeading>
);

export default Heading;
