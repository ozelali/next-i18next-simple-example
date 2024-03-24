import Link from 'next/link';
import { useTranslation } from '@/i18n';

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1>{t('title')}</h1>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
      </button>
    </main>
  );
}
