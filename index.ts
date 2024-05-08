const findMinimumNumber = (arr: number[]): number => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numbersFrom1To50UnOrdered = [50, 30, 20, 10, 40];
const minimumNumber = findMinimumNumber(numbersFrom1To50UnOrdered);
console.log(minimumNumber); // 10

