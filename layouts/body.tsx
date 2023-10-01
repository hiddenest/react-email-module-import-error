import {
  Body as DefaultBody,
  Container,
  Tailwind,
  type TailwindProps,
} from '@react-email/components';

import config from '../tailwind.config.mjs';

type Props = {
  language: Language;
  children: React.ReactNode;
};

const Body = ({ language, children }: Props) => (
  <Tailwind config={getTailwindConfigurations(language)}>
    <DefaultBody className='m-auto bg-white font-sans'>
      <Container className='my-0 mx-auto w-full max-w-[50em]'>
        {children}
      </Container>
    </DefaultBody>
  </Tailwind>
);

const getTailwindConfigurations = (language: Language): TailwindProps['config'] => {
  const fontFamily: string[] = ['sans-serif'];

  if (language === 'ko') {
    fontFamily.unshift('"Pretendard"');
  }
  if (language === 'en') {
    fontFamily.unshift('"Inter"');
  }
  if (language === 'ja') {
    fontFamily.unshift('"Noto Sans JP"');
  }

  return {
    // @ts-ignore
    theme: {
      ...config.theme,
      fontFamily: {
        sans: fontFamily,
      },
    },
  };
};

export default Body;
