export function cycle<T>(array: T[], n: number): T[] {
  const right = array.slice(n);
  const left = array.slice(0, n);
  return right.concat(left);
}
