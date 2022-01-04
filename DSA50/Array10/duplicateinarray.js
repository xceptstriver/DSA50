const duplicateinArray = (arr) => {
  let ele = arr.filter((_, i) => arr.indexOf(_) != i);
  return ele;
};

console.log(duplicateinArray([1, 2, 3, 4, 4]));
