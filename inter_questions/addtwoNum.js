const memoizeAny = (func) => {
  let memoizedKeyValues = [];
  return (...args) => {
    let result = memoizedKeyValues.find((_) => _.args == JSON.stringify(args));
    if (result) {
      return result.result;
    }

    result = func.apply(this, args);
    memoizedKeyValues.push({
      args: JSON.stringify(args),
      result: result,
    });
    return result;
  };
};

const addSum = memoizeAny((p1, p2) => {
  return p1 + p2;
});

console.log(addSum(5, 5));
console.log(addSum(5, 10));
console.log(addSum(5, 7));
console.log(addSum(5, 5));



