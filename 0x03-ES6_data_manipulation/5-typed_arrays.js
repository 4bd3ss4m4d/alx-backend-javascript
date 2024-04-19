export default function createInt8TypedArray(length, position, value) {
  // Validate Input
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create the Array Buffer
  const buffer = new ArrayBuffer(length);

  // Create a DataView from the buffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
