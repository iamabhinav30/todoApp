function reverseWord(str) {
  var val = str.split('');
  var newStr = '';
  for (var i = val.length - 1; i >= 0; i--) {
    newStr = newStr + val[i];
  }
  console.log(newStr);
}
reverseWord('Abhinav');

function reverseString(str) {
  debugger;
  var newStr = str.split(' ');
  var finalStr = ''
  for (var i = 0; i < newStr.length; i++) {
    var val = newStr[i].split('');
    var wordVal = '';
    for (var j = val.length - 1; j >= 0; j--) {
      wordVal = wordVal + val[j];
    }
    finalStr += wordVal + ' ';
  }
  console.log(finalStr);
}
reverseString('Abhinav is great')
