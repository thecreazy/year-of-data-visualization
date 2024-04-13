'use client';

import { Fragment } from 'react';

import useGA4 from '../../hooks/useGA4';

export default function GA4Tags({ children }) {
  useGA4();
  return <Fragment />;
}
