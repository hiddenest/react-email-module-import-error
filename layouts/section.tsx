import { Section as DefaultSection } from '@react-email/components';

import { cn } from '../utils';

type Props = React.ComponentProps<typeof DefaultSection>;
const Section = ({ className, ...props }: Props) => (
  <DefaultSection
    className={cn(
      'm-0 py-[6px] px-[18px]',
      className,
    )}
    {...props}
  />
);

export default Section;
