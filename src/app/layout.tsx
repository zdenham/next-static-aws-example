'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useDynamicParams = () => {
  const path = usePathname();

  // TODO - use the path to determine the dynamic params
  return {
    id: '1',
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dynamicParams = useDynamicParams();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
