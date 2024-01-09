'use client';

import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Link from 'next/link';

import { infos as metadata1 } from '../../app/day/1/config';
import { infos as metadata2 } from '../../app/day/2/config';
import { infos as metadata3 } from '../../app/day/3/config';
import { infos as metadata4 } from '../../app/day/4/config';
import { infos as metadata5 } from '../../app/day/5/config';
import { infos as metadata6 } from '../../app/day/6/config';
import { infos as metadata7 } from '../../app/day/7/config';
import { infos as metadata8 } from '../../app/day/8/config';
import { infos as metadata9 } from '../../app/day/9/config';
import { infos as metadata10 } from '../../app/day/10/config';
import { infos as metadata11 } from '../../app/day/11/config';
import { infos as metadata12 } from '../../app/day/12/config';
import { infos as metadata13 } from '../../app/day/13/config';
import { infos as metadata14 } from '../../app/day/14/config';
import { infos as metadata15 } from '../../app/day/15/config';
import { infos as metadata16 } from '../../app/day/16/config';
import { infos as metadata17 } from '../../app/day/17/config';
import { infos as metadata19 } from '../../app/day/19/config';
import { infos as metadata21 } from '../../app/day/21/config';
import { infos as metadata24 } from '../../app/day/24/config';
import { infos as metadata28 } from '../../app/day/28/config';
import { infos as metadata35 } from '../../app/day/35/config';
import { infos as metadata43 } from '../../app/day/43/config';
import { infos as metadata46 } from '../../app/day/46/config';
import { infos as metadata53 } from '../../app/day/53/config';
import { infos as metadata56 } from '../../app/day/56/config';
import { infos as metadata62 } from '../../app/day/62/config';
import { infos as metadata73 } from '../../app/day/73/config';
import { infos as metadata81 } from '../../app/day/81/config';
import { infos as metadata90 } from '../../app/day/90/config';
import { infos as metadata93 } from '../../app/day/93/config';
import { infos as metadata195 } from '../../app/day/195/config';
import { infos as metadata244 } from '../../app/day/244/config';

const metadata = {
  1: metadata1,
  2: metadata2,
  3: metadata3,
  4: metadata4,
  5: metadata5,
  6: metadata6,
  7: metadata7,
  8: metadata8,
  9: metadata9,
  10: metadata10,
  11: metadata11,
  12: metadata12,
  13: metadata13,
  14: metadata14,
  15: metadata15,
  16: metadata16,
  17: metadata17,
  19: metadata19,
  21: metadata21,
  24: metadata24,
  28: metadata28,
  35: metadata35,
  43: metadata43,
  46: metadata46,
  53: metadata53,
  56: metadata56,
  62: metadata62,
  73: metadata73,
  81: metadata81,
  90: metadata90,
  93: metadata93,
  195: metadata195,
  244: metadata244,
};

dayjs.extend(dayOfYear);

export default function Links() {
  const todayDay = dayjs().dayOfYear();
  return (
    <ul className='text-center text-2xl'>
      {Object.keys(metadata).map((day, index) => {
        if (!metadata[day]) return null;
        if (Number(day) > todayDay) return null;
        return (
          <li key={`day-${day}`} className='pb-4 li-link'>
            <Link
              className='font-mono hover:text-neutral-400'
              href={`/day/${day}`}
              data-image-url={`/public/screen/${day}.png`}
            >
              Day {index + 1} | {metadata[day].title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
