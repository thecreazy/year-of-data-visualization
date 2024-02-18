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
import { infos as metadata18 } from '../../app/day/18/config';
import { infos as metadata19 } from '../../app/day/19/config';
import { infos as metadata20 } from '../../app/day/20/config';
import { infos as metadata21 } from '../../app/day/21/config';
import { infos as metadata22 } from '../../app/day/22/config';
import { infos as metadata23 } from '../../app/day/23/config';
import { infos as metadata24 } from '../../app/day/24/config';
import { infos as metadata25 } from '../../app/day/25/config';
import { infos as metadata26 } from '../../app/day/26/config';
import { infos as metadata27 } from '../../app/day/27/config';
import { infos as metadata28 } from '../../app/day/28/config';
import { infos as metadata29 } from '../../app/day/29/config';
import { infos as metadata30 } from '../../app/day/30/config';
import { infos as metadata31 } from '../../app/day/31/config';
import { infos as metadata32 } from '../../app/day/32/config';
import { infos as metadata33 } from '../../app/day/33/config';
import { infos as metadata34 } from '../../app/day/34/config';
import { infos as metadata35 } from '../../app/day/35/config';
import { infos as metadata36 } from '../../app/day/36/config';
import { infos as metadata37 } from '../../app/day/37/config';
import { infos as metadata38 } from '../../app/day/38/config';
import { infos as metadata39 } from '../../app/day/39/config';
import { infos as metadata40 } from '../../app/day/40/config';
import { infos as metadata41 } from '../../app/day/41/config';
import { infos as metadata42 } from '../../app/day/42/config';
import { infos as metadata43 } from '../../app/day/43/config';
import { infos as metadata44 } from '../../app/day/44/config';
import { infos as metadata45 } from '../../app/day/45/config';
import { infos as metadata46 } from '../../app/day/46/config';
import { infos as metadata47 } from '../../app/day/47/config';
import { infos as metadata48 } from '../../app/day/48/config';
import { infos as metadata49 } from '../../app/day/49/config';
import { infos as metadata50 } from '../../app/day/50/config';
import { infos as metadata51 } from '../../app/day/51/config';
import { infos as metadata52 } from '../../app/day/52/config';
import { infos as metadata53 } from '../../app/day/53/config';
import { infos as metadata54 } from '../../app/day/54/config';
import { infos as metadata55 } from '../../app/day/55/config';
import { infos as metadata56 } from '../../app/day/56/config';
import { infos as metadata57 } from '../../app/day/57/config';
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
  18: metadata18,
  19: metadata19,
  20: metadata20,
  21: metadata21,
  22: metadata22,
  23: metadata23,
  24: metadata24,
  25: metadata25,
  26: metadata26,
  27: metadata27,
  28: metadata28,
  29: metadata29,
  30: metadata30,
  31: metadata31,
  32: metadata32,
  33: metadata33,
  34: metadata34,
  35: metadata35,
  36: metadata36,
  37: metadata37,
  38: metadata38,
  39: metadata39,
  40: metadata40,
  41: metadata41,
  42: metadata42,
  43: metadata43,
  44: metadata44,
  45: metadata45,
  46: metadata46,
  47: metadata47,
  48: metadata48,
  49: metadata49,
  50: metadata50,
  51: metadata51,
  52: metadata52,
  53: metadata53,
  54: metadata54,
  55: metadata55,
  56: metadata56,
  57: metadata57,
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
      {Object.keys(metadata)
        .reverse()
        .map((day) => {
          if (!metadata[day]) return null;
          if (Number(day) > todayDay) return null;
          return (
            <li key={`day-${day}`} className='pb-4 li-link'>
              <Link
                className='font-mono hover:text-neutral-400'
                href={`/day/${day}`}
                data-image-url={`/public/screen/${day}.png`}
              >
                Day {day} | {metadata[day].title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
