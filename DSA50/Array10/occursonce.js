const occursOnce = (arr) => {
  let result = arr.filter((_) => arr.indexOf(_) == arr.lastIndexOf(_));
  return result;
};

console.log(occursOnce([5, 6, 9, 6, 1, 9, 1, 5, 3]));
