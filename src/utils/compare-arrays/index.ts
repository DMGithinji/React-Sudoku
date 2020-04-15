/**
 * A recursive function that compares two arrays of whatever dimension.
 * Returns true if similar and false if different
 * @param array1
 * @param array2
 */
function compareArrays(array1: any[], array2: any[]): boolean {
  
  if (!Array.isArray(array1) && !Array.isArray(array2))
    return array1 === array2;

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (!compareArrays(array1[i], array2[i])) return false;
  }

  return true;
}

export default compareArrays;