import { Head as DefaultHead } from '@react-email/components';

type Props = {
  language: Language;
  title: string;
  children?: React.ReactNode;
};

const Head = ({ language, title, children }: Props) => (
  <DefaultHead>
    {language === 'ko' && (
      <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css" />
    )}
    {language === 'en' && (
      <link rel='stylesheet' as='style' href='https://fonts.googleapis.com/css2?family=Inter:wght@300..900' />
    )}
    {language === 'ja' && (
      <link rel="stylesheet" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300..900" />
    )}

    <title>{title}</title>

    {children}
  </DefaultHead>
);

export default Head;
