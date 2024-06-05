'use client';

import { useDynamicParams } from '@/lib/useDynamicParams';

export function ID() {
  const { id } = useDynamicParams();
  return <div>{id}</div>;
}
