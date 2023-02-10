import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { CookiesPolicy } from 'views/CookiesPolicy/CookiesPolicy';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Titles, Namespace.Languages, Namespace.Navigation])) },
  };
}

export default function CookiesPolicyPage(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('cookiesPolicy') || undefined} />
      <CookiesPolicy {...props} />
    </>
  );
}
