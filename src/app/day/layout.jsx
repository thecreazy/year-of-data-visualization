'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Marvel } from '@internal/components/Marvel/Marvel';

import { Flag as Flag105 } from './105/components/Flag';
import { Background as Background106 } from './106/components/Background';
import { Flag as Flag112 } from './112/components/Flag';
import './layout.css';

export default function DayLayout(props) {
  const pathname = usePathname();
  const { children } = props;
  const day = pathname.split('/')[2];
  return (
    <main id={`data-${day}`} className='relative min-h-screen px-[32px]'>
      {day === '51' && <Marvel />}
      {day === '105' && <Flag105 />}
      {day === '106' && <Background106 />}
      {day === '112' && <Flag112 />}
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
