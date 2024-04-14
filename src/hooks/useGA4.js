'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals';

export default function useGA4() {
  function sendToGoogleAnalytics({ name, delta, value, id }) {
    if (!window.dataLayer) window.dataLayer = [];
    window.dataLayer.push([
      'event',
      name,
      {
        value: delta,
        metric_id: id,
        metric_value: value,
        metric_delta: delta,
      },
    ]);
  }
  useEffect(() => {
    onCLS(sendToGoogleAnalytics);
    onFID(sendToGoogleAnalytics);
    onLCP(sendToGoogleAnalytics);
    onINP(sendToGoogleAnalytics);
    onTTFB(sendToGoogleAnalytics);
    onFCP(sendToGoogleAnalytics);
  }, []);
}
