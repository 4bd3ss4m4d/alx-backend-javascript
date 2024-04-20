export default function cleanSet(set, stertString) {
  if (
    !set
    || !(set instanceof Set)
    || !stertString
    || typeof stertString !== 'string'
  ) {
    return '';
  }
  return Array.from(set)
    .filter((value) => value && value.startsWith(stertString))
    .map((value) => value.replace(stertString, ''))
    .join('-');
}
