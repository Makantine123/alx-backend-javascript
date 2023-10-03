export default function cleanSet(set, startString) {
  const filterdArray = Array.from(set).filter((item) => item.startsWith(startString));
  const cleanArray = filterdArray.map((value) => value.substring(startString.length));
  if (cleanArray.length > 0)
    return cleanArray.join('-');
  return '';
}
