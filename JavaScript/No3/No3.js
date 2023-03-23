function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}

function argwhere(arr) {
  let indeks = [];
  let shape = dim(arr);
  for (let i = 0; i < shape[0]; i++) {
    for (let j = 0; j < shape[1]; j++) {
      for (let k = 0; k < shape[2]; k++) {
        if (arr[i][j][k] !== 0) {
          indeks.push([i, j, k]);
        }
      }
    }
  }
  return indeks;
}

let arr = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];

let indeks = argwhere(arr);
console.log(indeks);