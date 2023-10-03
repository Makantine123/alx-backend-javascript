export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const endpointKey = Object.freeze(endpoint);

  if (!weakMap.has(endpointKey)) {
    weakMap.set(endpointKey, 1);
  } else {
    const count = weakMap.get(endpointKey) + 1;
    weakMap.set(endpointKey, count);

    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
