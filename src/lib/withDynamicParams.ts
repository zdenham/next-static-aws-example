const cannotDeduceErr =
  'Cannot deduce path, please provide a path to withDynamicParams';

const parseStackLine = (stackLine: string): string => {
  console.log('PARSING STACK LINE: ', stackLine);
  return 'blah';
};

const getPathFromErrorStack = (): string => {
  const stack = new Error().stack;
  if (!stack) {
    throw new Error(cannotDeduceErr);
  }

  const stackLines = stack.split('\n');
  for (let stackLine of stackLines) {
    if (stackLine.includes('/app/')) {
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
