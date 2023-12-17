import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Link from 'next/link';

import { metadata as metadata1 } from '../../app/day/1/layout';
import { metadata as metadata2 } from '../../app/day/2/layout';
import { metadata as metadata4 } from '../../app/day/4/layout';
import { metadata as metadata5 } from '../../app/day/5/layout';
import { metadata as metadata7 } from '../../app/day/7/layout';
import { metadata as metadata11 } from '../../app/day/11/layout';
import { metadata as metadata14 } from '../../app/day/14/layout';
import { metadata as metadata24 } from '../../app/day/24/layout';
import { metadata as metadata28 } from '../../app/day/28/layout';
import { metadata as metadata35 } from '../../app/day/35/layout';
import { metadata as metadata43 } from '../../app/day/43/layout';
import { metadata as metadata46 } from '../../app/day/46/layout';
import { metadata as metadata53 } from '../../app/day/53/layout';
import { metadata as metadata56 } from '../../app/day/56/layout';
import { metadata as metadata62 } from '../../app/day/62/layout';
import { metadata as metadata73 } from '../../app/day/73/layout';
import { metadata as metadata81 } from '../../app/day/81/layout';
import { metadata as metadata90 } from '../../app/day/90/layout';
import { metadata as metadata93 } from '../../app/day/93/layout';
import { metadata as metadata195 } from '../../app/day/195/layout';
import { metadata as metadata244 } from '../../app/day/244/layout';

const metadata = {
  1: metadata1,
  2: metadata2,
  4: metadata4,
  5: metadata5,
  7: metadata7,
  11: metadata11,
  14: metadata14,
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
      {Object.keys(metadata).map((day) => {
        if (!metadata[day]) return null;
        if (Number(day) > todayDay) return null;
        return (
          <li key={`day-${day}`} className='pb-4'>
            <Link
              className='font-mono hover:text-neutral-400'
              href={`/day/${day}`}
            >
              {metadata[day].title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
