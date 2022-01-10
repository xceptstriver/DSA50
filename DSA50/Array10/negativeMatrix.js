const totalNegativeNumbers = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(
  totalNegativeNumbers([
    [3, 1],
    [2, -1],
    [1, -2],
  ])
);
