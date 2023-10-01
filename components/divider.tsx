import { Hr } from '@react-email/components';

import { cn } from '../utils';

type Props = React.ComponentProps<typeof Hr>;

const Divider = ({ className, ...props }: Props) => (
  <Hr
    {...props}
    className={cn(
      'my-[30px] mx-[18px]',
      'w-[calc(100%-36px)]',
      className,
    )}
  />
);

export default Divider;
