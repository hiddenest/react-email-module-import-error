import { Link } from '@react-email/components';
import { cn } from '../utils';

type Props = React.ComponentProps<typeof Link>;

const ExternalLink = ({
  target = '_blank',
  className,
  children,
  ...props
}: Props) => (
  <Link
    {...props}
    className={cn(
      'text-accent underline',
      className,
    )}
    target={target}
    rel='noreferrer noopener'
  >
    {children}
  </Link>
);

export default ExternalLink;
