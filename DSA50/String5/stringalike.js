const stringAlike = () => {
  let s = "textbook";
  const s1 = s.slice(0, s.length / 2);
  const s2 = s.slice(s.length / 2, s.length);
  if (countVowels(s1) == countVowels(s2)) {
    return true;
  } else {
    return false;
  }
};

const countVowels = (str) => {
  let vowelsCount = 0;
  str.split("").forEach((ele) => {
    if (["a", "e", "i", "o", "u"].includes(ele)) {
      vowelsCount += 1;
    }
  });
  return vowelsCount;
};

console.log(stringAlike());
