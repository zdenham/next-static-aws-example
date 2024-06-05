import { useParams, usePathname } from 'next/navigation';

import { useRouter } from 'next/router';

export const useDynamicParams = (): Record<string, string> => {
  console.log('ABOUT TO GET PATH NAMEE!!!');
  const pathName = usePathname();
  const params = useParams();
  const router = useRouter();

  console.log('PATH: ', router.asPath, pathName, params);

  return { id: 'hello' };
};
