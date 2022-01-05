const movezerosLeft = (arr) => {
  let count = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != 0) {
      arr[count] = arr[i];
      count--;
    }
  }
  for (let i = count; i >= 0; i--) {
    arr[i] = 0;
  }
  return arr;
};

console.log(movezerosLeft([1, 1, 0, 2, 0]));
