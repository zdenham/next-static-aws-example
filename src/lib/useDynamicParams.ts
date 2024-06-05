import { getDynamicRoutes } from './getDynamicRoutes';
import { getPathFromErrorStack } from './withDynamicParams';
import { usePathname } from 'next/navigation';

const dynamicRoutes = getDynamicRoutes();

export const useDynamicParams = () => {
  return () => {
    const pathName = usePathname();
  };
};
