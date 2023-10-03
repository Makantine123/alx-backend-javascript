export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw Error('Cannot process');
  }
  myMap.set('Pasta', 100);
  myMap.set('Rice', 100);
  return myMap;
}
