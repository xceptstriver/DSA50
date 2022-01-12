const peakElement = (arr) => {
  let element = arr.find((_, i, arr) => {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      return arr[i];
    }
  });
  return element;
};

console.log(peakElement([1, 2, 3, 2, 1]));
