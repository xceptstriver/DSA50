const containsDuplicate = (arr) => {
  let boolArr = arr.filter((_) => arr.indexOf(_) == arr.lastIndexOf(_));
  if (boolArr.length == arr.length) return false;

  return true;
};

console.log(containsDuplicate([1, 2, 4, 5]));
