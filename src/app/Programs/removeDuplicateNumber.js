function removeDuplicateNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
}

var arr = [1, 1, 1, 2, 3, 1, 1, 3, 3, 9, 9, 2, 2, 2, 4, 4, 4, 5, 6, 6];

removeDuplicateNumber(arr);
