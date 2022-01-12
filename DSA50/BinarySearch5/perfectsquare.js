const perfectSquare = (num) => {
  let ans = false;
  for (let i = 1; i < num; i++) {
    if (i * i == num) {
      return !ans;
    }
    if (i * i > num) {
      return ans;
    }
  }
  return ans;
};

console.log(perfectSquare(7));
