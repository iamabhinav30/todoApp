let arr1 = [1, 2, [3, null, [5, 6, [7, 8, [9, 10]]]]];
//   let newVal = arr1.split('');
var newArr = [];
function flattenArr(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      flattenArr(arr[i])
    }
  }
  console.log(newArr);
}

flattenArr(arr1);


[1, 3, 2, 5]
