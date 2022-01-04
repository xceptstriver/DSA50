const majorityElement = (arr) => {
  const threshold = Math.floor(arr.length / 2);
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    // console.log(map);
    map[value] = map[value] + 1 || 1;
    if (map[value] > threshold) {
      return value;
    }
  }
  return false;
};

console.log(majorityElement([1, 2, 2, 2, 4]));
