import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './PrivacyList.module.scss';

export const PrivacyList: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <div className={styles.Privacy}>
      <Text className={styles.Privacy__Underlined} size="small" uppercase>
        Policies
      </Text>

      <Text size="small">{t('footer.terms')}</Text>

      <Text size="small">Cookies</Text>

      <Text size="small">{t('footer.sitemap')}</Text>

      <Text size="small">{t('footer.privacy-policy')}</Text>
    </div>
  );
};
