'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function Home() {
  const [dynamicSlug, setDynamicSlug] = useState('my-dynamic-slug');

  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        This is a static next.js website hosted on s3 + cloudfront built using{' '}
        <a href="https://github.com/zdenham/next-static-utils" target="_blank">
          next-static-utils
        </a>{' '}
        . This site demonstrates dynamic url parameters using the app router.
        Type in any slug below to visit a dynamic page.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 20,
        }}
      >
        <div>/blog/</div>
        <input
          style={{ marginRight: 25, marginLeft: 5 }}
          onChange={(e) => setDynamicSlug(e.target.value)}
          value={dynamicSlug}
        ></input>
        <Link href={`/blog/${dynamicSlug}`}>Visit Dynamic Route</Link>
      </div>
    </div>
  );
}
