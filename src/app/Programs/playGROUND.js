function plusMinus(arr) {
  let zeroCount = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    } else if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    }
  }

  console.log(positiveCount / arr.length, negativeCount / arr.length, zeroCount / arr.length,)
}

plusMinus([-4, 3, -9, 0, 4, 1]);
