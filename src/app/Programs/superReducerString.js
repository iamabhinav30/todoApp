// Complete the superReducedString function below.
function superReducedString(s) {
  var str = s.split('');
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      str.splice(i + 1, 1);
      i--;

    }
  }
  console.log(str.join())
}
superReducedString('aaabccddd');
// aaabccddd ==> abd

