function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b; 
  } else {
    throw new Error('Invalid input: both arguments must be numbers');
  }
}

let result1 = addSafe(1, 2); // Works correctly
console.log(result1);

try {
  let result2 = addSafe(1, "2"); // Throws an error at runtime
  console.log(result2);
} catch (error) {
  console.error(error);
}

let result3 = addSafe(1, 2);
console.log(result3); 