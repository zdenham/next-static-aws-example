import { getPathFromErrorStack } from './withDynamicParams';
import { useRouter } from 'next/navigation';

export const dynamicParamsHook = () => {
  const path = getPathFromErrorStack();

  return () => {
    const router = useRouter();
    const routerPath = router;
    console.log('ROUTER PATH: ', routerPath);
    if (typeof window === 'undefined') {
      console.log('CALLING DYNAMIC PARAMS HOOK ON SERVER');
      return null;
    }

    console.log('CALLING DYNAMIC PARAMS HOOK ON CLIENT');

    return {
      id: '1',
    };
  };
};
