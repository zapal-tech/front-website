import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { HomePage } from 'views/HomePage/HomePage';

import { globalNamespaces, Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalNamespaces, Namespace.Home])),
    },
  };
}

export default function Home(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('home') || undefined} />
      <HomePage {...props} />
    </>
  );
}
