import Link from 'next/link';
import { useTranslation } from '@/i18n';

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, 'second-page');
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1>{t('title')}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <Link href={`/${lng}`}>{t('back-to-home')}</Link>
      </button>
    </main>
  );
}
