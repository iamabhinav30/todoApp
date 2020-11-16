function oddEvenSeperate(arr) {
  var arr1 = [], arr2 = [];
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  for (var j = 0; j < arr1.length - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      var temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
      j = -1;
    }
  }

  for (var j = 0; j < arr2.length - 1; j++) {
    if (arr2[j] > arr2[j + 1]) {
      var temp = arr2[j];
      arr2[j] = arr2[j + 1];
      arr2[j + 1] = temp;
      j = -1;
    }
  }
  console.log(arr1.concat(arr2));
}

oddEvenSeperate([12, 24, 5, 1, 65, 123, 5, 78, 24]);
