import { extractParamsFromPath } from './extractParamsFromPath';
import { getDynamicRoutes } from './getDynamicRoutes';
import { usePathname } from 'next/navigation';

const dynamicRoutes = getDynamicRoutes();

export const useDynamicParams = () => {
  return () => {
    const pathName = usePathname();
    const params = extractParamsFromPath(pathName, dynamicRoutes);

    return params;
  };
};
