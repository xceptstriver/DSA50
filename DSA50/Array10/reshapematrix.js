const matrixReshape = (mat, r, c) => {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const result = [];
  const flatMat = mat.flat();
  let i = -1;

  for (let row = 0; row < r; row++) {
    for (let column = 0; column < c; column++) {
      i++;
      if (column === 0) {
        result[row] = [flatMat[i]];
        continue;
      }
      result[row][column] = flatMat[i];
    }
  }

  return result;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
