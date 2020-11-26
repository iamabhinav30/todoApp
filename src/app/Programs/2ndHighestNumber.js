// [45, 15, 67, 23, 78]
function secondLargest(arr) {
  var maxFirst = arr[0];
  var maxSecond = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxFirst) {
      maxSecond = maxFirst;
      maxFirst = arr[i];
    }
    else if (arr[i] > maxSecond && arr[i] !== maxFirst) {
      maxSecond = arr[i];
    }
  }
  console.log(maxSecond);
}
secondLargest([45, 15, 67, 23, 78]);
  //  Output : 67
