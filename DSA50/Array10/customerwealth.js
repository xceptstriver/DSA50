const highestcustomerWealth = (matrix) => {
  let max = 0;
  let min = 0;
  for (let i = 0; i < matrix.length; i++) {
    let len = matrix[i].length;
    for (let j = 0; j < len; j++) {
      max = max + matrix[i][j];
    }
    if (max > min) {
      min = max;
      max = 0;
    } else {
      max = 0;
    }
  }
  return min;
};

console.log(
  highestcustomerWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
