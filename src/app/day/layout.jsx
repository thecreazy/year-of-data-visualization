'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Marvel } from '@internal/components/Marvel/Marvel';

import './layout.css';

export default function DayLayout(props) {
  const pathname = usePathname();
  const { children } = props;
  const day = pathname.split('/')[2];
  return (
    <main id={`data-${day}`} className='relative min-h-screen px-[32px]'>
      {day === '51' && <Marvel />}
      <div className='container mx-auto py-8 relative'>
        <div className='back-button'>
          <Link href='/'>
            <h2 className='py-2 text-3xl font-bold'>Day {day}</h2>
            <span className='bg'></span>
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}
