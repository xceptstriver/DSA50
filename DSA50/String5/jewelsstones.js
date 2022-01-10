const countJewels = () => {
  const stones = "aAAbbbb";
  const jewels = "aA";
  let sum = 0;
  for (let stone of stones) {
    if (jewels.includes(stone)) {
      sum += 1;
    }
  }
  return sum;
};

console.log(countJewels());
