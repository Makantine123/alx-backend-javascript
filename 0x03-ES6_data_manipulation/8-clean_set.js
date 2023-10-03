export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const filterdArray = Array.from(set).filter((item) => item.startsWith(startString));
  const cleanArray = filterdArray.map((value) => value.substring(startString.length));
  return cleanArray.join('-');
}
