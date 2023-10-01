import { Fragment } from 'react';
import { Html, Row } from '@react-email/components';

import { Head, Body, Section } from '../layouts';
import { Heading, Paragraph, Divider, Caption, Cta } from '../components';

type Props = {
  language: Language;
};

const ResetPasswordTemplate = ({ language }: Props) => {
  const i18n = I18nMessage[language] ?? I18nMessage.en;

  return (
    <Html>
      <Head
        language={language}
        title={i18n.title}
      />

      <Body language={language}>
        <Section>
          <Heading>
            {i18n.title}
          </Heading>
        </Section>

        <Divider />

        <Section>
          <Paragraph>
            {i18n.clickButtonToResetPassword}
          </Paragraph>
        </Section>

        <Section>
          <Row className='mb-[18px]'>
            <Caption>
              {i18n.thisInvitationIsValidFor15Minutes.split('<br>').map((text, index) => (
                <Fragment key={index}>
                  {text}
                  {index < 1 && <br />}
                </Fragment>
              ))}
            </Caption>
          </Row>

          <Cta
            title={i18n.resetPassword}
            href='{{dst_url}}'
          >
            {i18n.resetPassword}
          </Cta>
        </Section>
      </Body>
    </Html>
  );
};


const I18nMessage = {
  ko: {
    title: '비밀번호를 재설정해주세요',
    clickButtonToResetPassword: '아래 버튼을 클릭해 비밀번호를 재설정해주세요.',
    thisInvitationIsValidFor15Minutes: '* 비밀번호 재설정은 메일 발송 후 15분 동안 유효하며, 이후에는 비밀번호 재설정 메일을 다시 전송하셔야 합니다.',
    resetPassword: '비밀번호 재설정하기',
  },
  en: {
    title: 'Reset password',
    clickButtonToResetPassword: 'Click the button below to set your password.',
    thisInvitationIsValidFor15Minutes: '* This reset password link is valid for 15 minutes from the time this email is sent. <br>Once the link expires, you need to resend the authentication email.',
    resetPassword: 'Reset Password',
  },
  ja: {
    title: 'パスワードを再設定してください',
    clickButtonToResetPassword: '下のボタンをクリックして、パスワードの再設定を行なってください。',
    thisInvitationIsValidFor15Minutes: '※ パスワードの再設定過程において、メールのアクセス有効期限は送信から15分です。<br>それが期限切れとなった後には、もう一度再設定メールを送らなければなりません。',
    resetPassword: 'パスワードを再設定する',
  },
};

export default ResetPasswordTemplate;
