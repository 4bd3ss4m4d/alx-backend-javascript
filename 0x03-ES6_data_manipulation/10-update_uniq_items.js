export default function updateUniqueItems(grocieriesMap) {
  if (!(grocieriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  grocieriesMap.forEach((quantity, item) => {
    if (quantity === 1) {
      grocieriesMap.set(item, 100);
    }
  });

  return grocieriesMap;
}
