export default function guardrail(mathFunction) {
  const queue = [];
  let returnedValue;

  try {
    returnedValue = mathFunction();
  } catch (error) {
    returnedValue = error.toString();
  } finally {
    queue.push(returnedValue, 'Guardrail was processed');
  }

  return queue;
}
