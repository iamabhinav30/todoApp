function sortArrays(arr) {
  var len = arr.length;
  // Sorting using a single loop
  for (var j = 0; j < len - 1; j++) {
    // Checking the condition for two// simultaneous elements of the array
    if (arr[j] > arr[j + 1]) {
      // Swapping the elements.
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j = -1;
      // console.log(arr); // it will show all sort steps

    }
  }

  console.log(arr[j]);
  return arr;
}

sortArrays([12, 24, 5, 1, 65, 123, 5, 78, 24]);
