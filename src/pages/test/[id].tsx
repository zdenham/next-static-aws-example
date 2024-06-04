import React from 'react';
import { useRouter } from 'next/router';

import { GetStaticPaths, GetStaticProps } from 'next';

export default function Hello() {
  const router = useRouter();
  return <div>Hello, {router.query.id}!</div>;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [], // No pre-rendered paths at build time.
//     fallback: true, // Fallback to handle dynamic ids.
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params!;

//   // Fetch data based on `id` if needed.

//   return {
//     props: {
//       id,
//     },
//   };
// };
