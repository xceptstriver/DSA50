const toLowerCase = () => {
  let s = "HELLO";
  const sl = s
    .split("")
    .map((_) => _.toLowerCase())
    .join("");

  return sl;
};

console.log(toLowerCase());
