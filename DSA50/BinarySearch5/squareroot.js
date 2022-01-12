const squareRoot = (num) => {
  let start = 1;
  let end = 10;
  let ans = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (middle * middle <= num) {
      ans = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return ans;
};

console.log(squareRoot(11));
