const shuffleSentence = (s) => {
  let result = [];
  const wordArr = s.split(" ");
  for (const item of wordArr) {
    result[item[item.length - 1] - 1] = item.substring(0, item.length - 1);
  }
  return result.join(" ");
};

console.log(shuffleSentence("is2 sentence4 This1 a3"));
