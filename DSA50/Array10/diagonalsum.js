const diagonalSum = (matrix) => {
  let mainSum = 0;
  let secondarySum = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainSum = mainSum + matrix[i][i];
    secondarySum = secondarySum + matrix[i][matrix.length - i - 1];
  }

  console.log(`[${mainSum},${secondarySum}]`);
};

diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
