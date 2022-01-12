const maxFrequency = () => {
  let s = "hellloo";
  let k = 2;
  let scount = 0;
  let ch = "";
  let obj = {};

  let str = s.split("");
  for (const character of str) {
    if (obj[character]) {
      obj[character] = obj[character] + 1;
    } else {
      obj[character] = 1;
    }
  }

  console.log(obj);

  for (const key in obj) {
    if (scount < obj[key]) {
      scount = obj[key];
      ch = key;
    }
  }

  return ch;
};

console.log(maxFrequency());
