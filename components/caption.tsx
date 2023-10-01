import { Text } from '@react-email/components';
import { cn } from '../utils';

type Props = React.ComponentProps<typeof Text>;
const Caption = ({ children, className, ...props }: Props) => (
  <Text
    {...props}
    className={cn(
      'm-0 p-0',
      'leading-[1.65] text-secondary !text-caption font-normal',
      className,
    )}
  >
    {children}
  </Text>
);

export default Caption;
