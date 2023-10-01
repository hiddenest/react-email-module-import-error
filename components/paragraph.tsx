import { Text } from '@react-email/components';
import { cn } from '../utils';

type Props = React.ComponentProps<typeof Text>;
const Paragraph = ({ children, className, ...props }: Props) => (
  <Text
    {...props}
    className={cn(
      'm-0 p-0',
      'leading-[1.65] text-primary !text-body font-normal',
      className,
    )}
  >
    {children}
  </Text>
);

export default Paragraph;
