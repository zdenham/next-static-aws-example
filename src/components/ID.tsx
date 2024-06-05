'use client';

import { useDynamicParams } from 'next-static-utils';

export function ID() {
  const { id } = useDynamicParams();
  return <div>{id}</div>;
}
