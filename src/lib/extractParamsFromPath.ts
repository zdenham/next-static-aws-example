export const extractParamsFromPath = (
  path: string,
  dynamicRoutes: string[]
) => {
  for (let format of dynamicRoutes) {
    // Strip off the page.tsx part if it's included in the format
    let strippedFormat = format.replace(/\/page\.tsx$/, '');

    // Convert the format to a regular expression
    let regexStr = strippedFormat.replace(/\[([^\]]+)\]/g, '(?<$1>[^/]+)');
    let regex = new RegExp(`^${regexStr}$`);

    // Test if the path matches the format
    let match = path.match(regex);

    if (match) {
      // Extract the named groups as the parameters
      return match.groups;
    }
  }

  // Return null if no match is found
  return null;
};
