export function add(numbers) {
  let sum = 0;
  // if(typeof number[0] === 'string') throw new Error('Invalid number')
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
