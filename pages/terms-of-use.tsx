import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { TermsOfUse } from 'views/TermsOfUse/TermsOfUse';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Titles, Namespace.Languages, Namespace.Navigation])) },
  };
}

export default function TermsOfUsePage(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('termsOfUse') || undefined} />
      <TermsOfUse {...props} />
    </>
  );
}
