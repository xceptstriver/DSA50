const flipMatrix = (image) => {
  const output = [];
  for (let ele of image) {
    output.push(invert(flip(ele)));
  }
  return output;
};

const flip = (input) => {
  const arr = [];
  for (let i = input.length - 1; i >= 0; i--) {
    arr.push(input[i]);
  }
  return arr;
};

const invert = (input) => {
  const arr = [];
  input.forEach((element) => {
    arr.push(element === 0 ? 1 : 0);
  });
  return arr;
};

console.log(
  flipMatrix([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
