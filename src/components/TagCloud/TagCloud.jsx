'use client';

import { TagCloud as _TagCloud } from 'react-tagcloud';

const TagCloud = ({ data }) => (
  <_TagCloud minSize={12} maxSize={35} tags={data} />
);

export default TagCloud;
