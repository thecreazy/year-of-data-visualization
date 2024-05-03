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
import { infos as metadata58 } from '../../app/day/58/config';
import { infos as metadata59 } from '../../app/day/59/config';
import { infos as metadata60 } from '../../app/day/60/config';
import { infos as metadata61 } from '../../app/day/61/config';
import { infos as metadata62 } from '../../app/day/62/config';
import { infos as metadata63 } from '../../app/day/63/config';
import { infos as metadata64 } from '../../app/day/64/config';
import { infos as metadata65 } from '../../app/day/65/config';
import { infos as metadata66 } from '../../app/day/66/config';
import { infos as metadata67 } from '../../app/day/67/config';
import { infos as metadata68 } from '../../app/day/68/config';
import { infos as metadata69 } from '../../app/day/69/config';
import { infos as metadata70 } from '../../app/day/70/config';
import { infos as metadata71 } from '../../app/day/71/config';
import { infos as metadata72 } from '../../app/day/72/config';
import { infos as metadata73 } from '../../app/day/73/config';
import { infos as metadata74 } from '../../app/day/74/config';
import { infos as metadata75 } from '../../app/day/75/config';
import { infos as metadata76 } from '../../app/day/76/config';
import { infos as metadata77 } from '../../app/day/77/config';
import { infos as metadata78 } from '../../app/day/78/config';
import { infos as metadata79 } from '../../app/day/79/config';
import { infos as metadata80 } from '../../app/day/80/config';
import { infos as metadata81 } from '../../app/day/81/config';
import { infos as metadata82 } from '../../app/day/82/config';
import { infos as metadata83 } from '../../app/day/83/config';
import { infos as metadata84 } from '../../app/day/84/config';
import { infos as metadata85 } from '../../app/day/85/config';
import { infos as metadata86 } from '../../app/day/86/config';
import { infos as metadata87 } from '../../app/day/87/config';
import { infos as metadata88 } from '../../app/day/88/config';
import { infos as metadata89 } from '../../app/day/89/config';
import { infos as metadata90 } from '../../app/day/90/config';
import { infos as metadata91 } from '../../app/day/91/config';
import { infos as metadata92 } from '../../app/day/92/config';
import { infos as metadata93 } from '../../app/day/93/config';
import { infos as metadata94 } from '../../app/day/94/config';
import { infos as metadata95 } from '../../app/day/95/config';
import { infos as metadata96 } from '../../app/day/96/config';
import { infos as metadata97 } from '../../app/day/97/config';
import { infos as metadata98 } from '../../app/day/98/config';
import { infos as metadata99 } from '../../app/day/99/config';
import { infos as metadata100 } from '../../app/day/100/config';
import { infos as metadata101 } from '../../app/day/101/config';
import { infos as metadata102 } from '../../app/day/102/config';
import { infos as metadata103 } from '../../app/day/103/config';
import { infos as metadata104 } from '../../app/day/104/config';
import { infos as metadata105 } from '../../app/day/105/config';
import { infos as metadata106 } from '../../app/day/106/config';
import { infos as metadata107 } from '../../app/day/107/config';
import { infos as metadata108 } from '../../app/day/108/config';
import { infos as metadata109 } from '../../app/day/109/config';
import { infos as metadata110 } from '../../app/day/110/config';
import { infos as metadata111 } from '../../app/day/111/config';
import { infos as metadata112 } from '../../app/day/112/config';
import { infos as metadata113 } from '../../app/day/113/config';
import { infos as metadata114 } from '../../app/day/114/config';
import { infos as metadata115 } from '../../app/day/115/config';
import { infos as metadata116 } from '../../app/day/116/config';
import { infos as metadata117 } from '../../app/day/117/config';
import { infos as metadata118 } from '../../app/day/118/config';
import { infos as metadata119 } from '../../app/day/119/config';
import { infos as metadata120 } from '../../app/day/120/config';
import { infos as metadata121 } from '../../app/day/121/config';
import { infos as metadata122 } from '../../app/day/122/config';
import { infos as metadata123 } from '../../app/day/123/config';
import { infos as metadata124 } from '../../app/day/124/config';
import { infos as metadata128 } from '../../app/day/128/config';
import { infos as metadata129 } from '../../app/day/129/config';
import { infos as metadata131 } from '../../app/day/131/config';

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
  58: metadata58,
  59: metadata59,
  60: metadata60,
  61: metadata61,
  62: metadata62,
  63: metadata63,
  64: metadata64,
  65: metadata65,
  66: metadata66,
  67: metadata67,
  68: metadata68,
  69: metadata69,
  70: metadata70,
  71: metadata71,
  72: metadata72,
  73: metadata73,
  74: metadata74,
  75: metadata75,
  76: metadata76,
  77: metadata77,
  78: metadata78,
  79: metadata79,
  80: metadata80,
  81: metadata81,
  82: metadata82,
  83: metadata83,
  84: metadata84,
  85: metadata85,
  86: metadata86,
  87: metadata87,
  88: metadata88,
  89: metadata89,
  90: metadata90,
  91: metadata91,
  92: metadata92,
  93: metadata93,
  94: metadata94,
  95: metadata95,
  96: metadata96,
  97: metadata97,
  98: metadata98,
  99: metadata99,
  100: metadata100,
  101: metadata101,
  102: metadata102,
  103: metadata103,
  104: metadata104,
  105: metadata105,
  106: metadata106,
  107: metadata107,
  108: metadata108,
  109: metadata109,
  110: metadata110,
  111: metadata111,
  112: metadata112,
  113: metadata113,
  114: metadata114,
  115: metadata115,
  116: metadata116,
  117: metadata117,
  118: metadata118,
  119: metadata119,
  120: metadata120,
  121: metadata121,
  122: metadata122,
  123: metadata123,
  124: metadata124,
  128: metadata128,
  129: metadata129,
  131: metadata131,
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
