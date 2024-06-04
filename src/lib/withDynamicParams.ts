const FALLBACK_STRING = 'next-static';

const cannotDeduceErr =
  'Cannot deduce path, please provide a path to withDynamicParams';

const patternToMatch = /app\/(.*?)\.tsx/;

export const withDynamicParams = (
  staticParamsFunc?: ParamsFunc,
  path: string = getPathFromErrorStack()
): ParamsFunc => {
  return async () => {
    const staticParamsArr = staticParamsFunc ? await staticParamsFunc() : [];
    const fallbackParams = getFallbackParamsFromPath(path);
    return [...staticParamsArr, fallbackParams];
  };
};

const parseStackLine = (stackLine: string): string => {
  const match = stackLine.match(patternToMatch);
  if (!match || !match[0]) {
    throw new Error(cannotDeduceErr);
  }

  return match[0].replace('app', '');
};

const getPathFromErrorStack = (): string => {
  const stack = new Error().stack;
  if (!stack) {
    throw new Error(cannotDeduceErr);
  }

  const stackLines = stack.split('\n');
  for (let stackLine of stackLines) {
    if (patternToMatch.test(stackLine)) {
      return parseStackLine(stackLine);
    }
  }

  throw new Error(cannotDeduceErr);
};

const getFallbackParamsFromPath = (
  path: string
): Record<string, typeof FALLBACK_STRING> => {
  const pathParts = path.split('/');

  const params = pathParts.map((part) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return FALLBACK_STRING;
    }
    return part.replace('[', '').replace(']', '');
  });

  return params.reduce((acc, param) => {
    acc[param] = FALLBACK_STRING;
    return acc;
  }, {} as Record<string, typeof FALLBACK_STRING>);
};

type ParamsFunc = () => Promise<Record<string, string>[]>;
