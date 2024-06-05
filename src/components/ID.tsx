'use client';

import { useDynamicParams, FALLBACK_STRING } from 'next-static-utils';

export function ID() {
  const { id } = useDynamicParams();
  if (id === FALLBACK_STRING) return null;
  return <div>{id}</div>;
}
