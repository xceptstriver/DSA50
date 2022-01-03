const mergetwoArr = () => {
  //solution_1 o(nlogn) o(n)
  //   let arr1 = [3, 5, 6, 10, 11, 20];
  //   let arr2 = [1, 2, 7, 8, 15, 19];
  //   let mergeredArr = [...arr1, ...arr2].sort((a, b) => a - b);
  //   return mergeredArr;

  //solution_2
  let arr1 = [3, 5, 6, 10, 11, 20];
  let arr2 = [1, 2, 7, 8, 15, 19];
  let mergeredArr = [];
  let index1 = 0;
  let index2 = 0;
  let curr = 0;

  while (curr < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    let unmerged1 = arr1[index1];
    let unmerged2 = arr2[index2];

    if (!isArr1Depleted && (isArr2Depleted || unmerged1 < unmerged2)) {
      mergeredArr[curr] = unmerged1;
      index1++;
    } else {
      mergeredArr[curr] = unmerged2;
      index2++;
    }
    curr++;
  }
  return mergeredArr;
};

console.log(mergetwoArr());
