[1, 2, 25, 3, 42, 6]

[{ 1: 2 }, { 2: 25 }, { 25: 42 }, { 3: 42 }, { 42: -1 }, { 6: -1 }]

function firstLargest(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let obj = {};
        obj[arr[i]] = arr[j];
        newArr.push(obj);
        found = true;
        break;
      }
    }
    if (!found) {
      let obj = {};
      obj[arr[i]] = '-1';
      newArr.push(obj);
    }
  }
  return newArr;
}


firstLargest([1, 2, 25, 3, 42, 6])
