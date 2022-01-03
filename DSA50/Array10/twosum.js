const twoSumPair = () => {
  let arr = [2, 3, 4, -2, 6, 8, 9, 11];
  let sortedArr = arr.sort((a, b) => a - b);
  let n = sortedArr.length;
  let target = 6;
  let low = 0;
  let high = n - 1;

  while (low < high) {
    if (sortedArr[low] + sortedArr[high] == target) {
      console.log(`The pair is : (${sortedArr[low]},${sortedArr[high]})`);
      low++;
      high--;
    }
    if (sortedArr[low] + sortedArr[high] > target) {
      high--;
    } else {
      low++;
    }
  }
};

twoSumPair();
