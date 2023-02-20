import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { useAppDispatch } from 'store';
import { selectContactFormState, setContactFormFieldValue, State as ContactFormState } from 'store/contactFormSlice';

import { Button, Container, Input, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './ContactForm.module.scss';

const schema = yup.object<ContactFormState>({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  company: yup.string(),
  message: yup.string().required(),
});

export const ContactForm: React.FC = () => {
  const { t } = useTranslation(Namespace.ContactForm);
  const dispatch = useAppDispatch();
  const contactFormState = useSelector(selectContactFormState);
  const { control, handleSubmit } = useForm<ContactFormState>({
    values: contactFormState,
    resolver: yupResolver(schema),
  });

  const handleChange = (name: string, value: string) =>
    dispatch(setContactFormFieldValue({ name: name as keyof ContactFormState, value }));

  const submitForm = (data: ContactFormState) => {
    console.log(data);
  };

  return (
    <Container className={styles.ContactForm}>
      <div className={styles.ContactForm__Greetings}>
        <Text size="heading1" className={styles.ContactForm__Title} uppercase>
          {t('title')}
        </Text>
        <Text size="small" className={styles.ContactForm__Subtitle}>
          {t('subtitle')}
        </Text>
      </div>

      <form className={styles.ContactForm__Form} onSubmit={handleSubmit(submitForm)}>
        <div className={styles.ContactForm__Fields}>
          <Input
            name="firstName"
            control={control}
            onChange={handleChange}
            autoComplete="given-name"
            placeholder={t('form.firstName')}
            required
          />

          <Input
            name="lastName"
            control={control}
            onChange={handleChange}
            autoComplete="family-name"
            placeholder={t('form.lastName')}
            required
          />

          <Input
            name="email"
            control={control}
            onChange={handleChange}
            autoComplete="email"
            placeholder={t('form.email')}
            required
          />

          <Input
            name="company"
            control={control}
            onChange={handleChange}
            autoComplete="organization"
            placeholder={t('form.company')}
          />

          <Input
            className={styles.ContactForm__Message}
            name="message"
            control={control}
            onChange={handleChange}
            placeholder={t('form.message')}
            required
          />
        </div>

        <div className={styles.ContactForm__Buttons}>
          {/* <Button variant="secondary" slider={false}>{t('form.file')}</Button> */}
          <Button variant="secondary">{t('form.submit')}</Button>
        </div>
      </form>
    </Container>
  );
};
