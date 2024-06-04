const cannotDeduceErr =
  'Cannot deduce path, please provide a path to withDynamicParams';

const patternToMatch = /app\/(.*?)\.tsx/;

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

export const withDynamicParams = (path: string = getPathFromErrorStack()) => {
  return async () => {
    return [
      {
        id: '1',
      },
    ];
  };
};
